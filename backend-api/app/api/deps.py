from fastapi import Security, HTTPException, status
from fastapi.security import APIKeyHeader

from typing import Annotated

from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)


api_key_header = APIKeyHeader(name="X-API-Key")

async def check_api_key(api_key: Annotated[str, Security(api_key_header)]):
    api_keys = settings.API_KEYS
    if len(api_key) > 0:
        logger.info(f"checking api key {api_key}")
        if not api_key in api_keys:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='invalid API key')
    elif settings.ENABLE_AUTH_FEATURE:
        logger.error("auth feature is enabled but no api keys are set")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='invalid API key')