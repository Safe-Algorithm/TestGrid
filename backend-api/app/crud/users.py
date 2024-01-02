from beanie.operators import Or
from app.schemas.users import UserOutDefault, UserInRegister, UserInLogin
from app.models.users import UserDocument
from app.logs.log_conf import Logger

logger = Logger(__name__)

class UserCrud:
    @classmethod
    async def insert_user(cls, user: UserInRegister):
        """insert user in db

        :params user (UserInRegister): user to insert
        """
        logger.info('inserting user in db...')
        await UserDocument.insert_one(UserDocument(**user.model_dump()))


    @classmethod
    async def get_user_by_username_or_email(cls, user: UserOutDefault) -> UserDocument | None:
        """retrieve user with either email or username

        :params user(UserOutDefault): user to retrieve

        :return: UserDocument or None
        """
        logger.info(f'retrieving user with email: {user.email}, or username: {user.username}')
        return await UserDocument.find_one(Or(UserDocument.email == user.email, UserDocument.username == user.username))
    
    @classmethod
    async def get_user_by_email(cls, user: UserInLogin) -> UserDocument | None:
        """retrieve user with email

        :params user(UserInLogin): user to retrieve

        :return: UserDocument or None
        """
        logger.info(f'retrieving user with email: {user.email}')
        return await UserDocument.find_one(UserDocument.email == user.email)
    
    
   