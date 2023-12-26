from pydantic import BaseModel


class BaseUser(BaseModel):
    username: str
    email: str


class UserInRegister(BaseUser):
    password: str