from enum import Enum


class UserTypesEnum(str, Enum):
    normal_user = "User"
    admin = "Admin"