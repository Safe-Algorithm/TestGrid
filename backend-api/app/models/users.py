from beanie import Document, Indexed
from pydantic import EmailStr
from datetime import datetime
from app.enums.users import UserTypesEnum
from typing import Annotated

current_datetime = datetime.utcnow()

class UserDocument(Document):
    email: Annotated[EmailStr, Indexed(unique=True)]
    username: Annotated[str, Indexed(unique=True)]
    password: str
    created_at: datetime = current_datetime
    updated_at: datetime = current_datetime
    user_type: UserTypesEnum = UserTypesEnum.normal_user
    active: bool = False
    disabled: bool = False
 
    class Settings:
        name = "users"
        validate_on_save = True # instead of validate on assignment


