from beanie import Document, Indexed
from pydantic import EmailStr, model_validator
from datetime import datetime
from app.enums.users import UserTypesEnum
from typing import Annotated, Any


class UserDocument(Document):
    email: Annotated[EmailStr, Indexed(unique=True)]
    username: Annotated[str, Indexed(unique=True)]
    password: str
    created_at: datetime
    updated_at: datetime
    user_type: UserTypesEnum = UserTypesEnum.normal_user
    active: bool = False
    disabled: bool = False
 
    class Settings:
        name = "users"
        validate_on_save = True # instead of validate on assignment

    @model_validator(mode='before')
    @classmethod
    def assign_dates(cls, data: Any) -> Any:
        current_datetime = datetime.utcnow()
        if isinstance(data, dict):
            data['created_at'] = current_datetime
            data['updated_at'] = current_datetime
        return data


