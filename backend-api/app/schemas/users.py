from pydantic import BaseModel, EmailStr
from datetime import datetime

from app.enums.users import UserTypesEnum


class BaseUser(BaseModel):
    email: EmailStr

class UserOutDefault(BaseUser):
    username: str

class UserInLogin(BaseUser):
    password: str

class UserInRegister(UserOutDefault):
    password: str

class TokenUser(UserOutDefault):
    created_at: datetime
    updated_at: datetime
    user_type: UserTypesEnum
    active: bool
    disabled: bool

class AccessToken(BaseModel):
    access_token: str
 
