from fastapi import APIRouter, Depends, status, Path, HTTPException, Body, Security

from typing import Annotated

from app.crud.users import UserCrud
from app.models.users import UserDocument
from app.schemas.users import UserInRegister, UserInLogin, TokenUser, AccessToken
from app.utils.users import get_password_hash, verify_password, create_access_token
from app.logs.log_conf import Logger

logger = Logger(__name__)


router = APIRouter()


@router.post("/signup",
            status_code=status.HTTP_200_OK,
            description="registers a a new user")
async def register_user(user: Annotated[UserInRegister, Body(...)]):
    if await UserCrud.get_user_by_username_or_email(user):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail='this user already exists')
    hashed_password = await get_password_hash(user.password) # glitch with passlib raises error when using bcrypt but still hashes the password
    user.password = hashed_password 
    try:
        await UserCrud.insert_user(user)
    except Exception as e:
        logger.error(f"failed to insert user {user} in db")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='failed inserting user in db')
    
@router.post("/login",
            status_code=status.HTTP_200_OK,
            description="retrieve an access token for a user")
async def register_user(user: Annotated[UserInLogin, Body(...)]) -> AccessToken:
    userFromDB: UserDocument = await UserCrud.get_user_by_email(user)
    if not userFromDB:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='email doesn\'t exist')
    if not await verify_password(user.password, userFromDB.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='wrong password')

    user_token_info: TokenUser = TokenUser(**userFromDB.model_dump())
    user_token_info.created_at = user_token_info.created_at.isoformat()
    user_token_info.updated_at = user_token_info.updated_at.isoformat()
    access_token = await create_access_token({'sub': userFromDB.email, 'user': user_token_info.model_dump()})
    return AccessToken(access_token=access_token)
    
