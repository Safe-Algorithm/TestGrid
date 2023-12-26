from fastapi import APIRouter, Depends, status, Path, HTTPException, Body, Security

from typing import Annotated

from app.api.deps import check_api_key
from app.crud.users import UserCrud
from app.schemas.users import UserInRegister
from app.utils.users import get_password_hash, verify_password
from app.logs.log_conf import Logger

logger = Logger(__name__)


router = APIRouter()


@router.post("/register",
            status_code=status.HTTP_200_OK,
            description="registers a a new user")
async def register_user(user: Annotated[UserInRegister, Body(...)]):
    if await UserCrud.get_user_username_or_email(user):
        raise HTTPException(status_code=409, detail='this user already exists')
    hashed_password = get_password_hash(user.password) # glitch with passlib raises error when using bcrypt but still hashes the password
    user.password = hashed_password 
    try:
        await UserCrud.insert_user(user)
    except Exception as e:
        logger.error(f"failed to insert user {user} in db")
        raise HTTPException(status_code=500, detail='failed inserting user in db')
    
