import jwt
from fastapi import Security, HTTPException, status, Depends
from fastapi.security import APIKeyHeader, HTTPBearer, HTTPAuthorizationCredentials

from typing import Annotated

from app.schemas.users import TokenUser, AccessToken
from app.crud.users import UserCrud
from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)


async def auth_feature_enabled() -> bool:
    auth_feature = settings.ENABLE_AUTH_FEATURE
    logger.info(f"authentication feature enabled: {auth_feature}")
    return auth_feature

api_key_header = APIKeyHeader(name="X-API-Key")

async def check_api_key(auth: Annotated[bool, Depends(auth_feature_enabled)],
                        api_key: Annotated[str, Security(api_key_header)]):
    api_keys = settings.API_KEYS
    if len(api_key) > 0:
        logger.info(f"checking api key {api_key}")
        if not api_key in api_keys:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='invalid API key')
    elif auth:
        logger.error("auth feature is enabled but no api keys are set")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='invalid API key')
    

security = HTTPBearer()
credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


async def get_authenticated_user(
    auth: Annotated[bool, Depends(auth_feature_enabled)],
    credentials: Annotated[HTTPAuthorizationCredentials, Depends(security)],
) -> TokenUser | None:
    if auth:
        token: AccessToken = AccessToken(access_token=credentials.credentials)
        user: TokenUser = await parse_token(token.access_token)
        return user
    return None


async def parse_token(token: str) -> TokenUser | None:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
        email: str = payload.get("sub")
        user_dict: dict = payload.get("user")
        if email is None or user_dict is None:
            raise credentials_exception
        user: TokenUser = TokenUser(**user_dict)
        if not await check_user_exists(user):
            raise credentials_exception
        return user

    except Exception as e:
        logger.error(f"Failed to parse access token: {token}")
        raise credentials_exception
    
async def check_user_exists(user: TokenUser) -> bool:
    user_db = await UserCrud.get_user_by_username_or_email(user)
    return True if user_db else False 