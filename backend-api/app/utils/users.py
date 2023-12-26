from passlib.context import CryptContext

from app.logs.log_conf import Logger

logger = Logger(__name__)

pwd_context = CryptContext(schemes=["bcrypt"], default="bcrypt", deprecated="auto")

def verify_password(plain_password, hashed_password) -> bool:
    logger.info(f"verifying password hash of password: {plain_password} with hash: {hashed_password}")
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password) -> str:
    logger.info(f"hashing password {password}")
    return pwd_context.hash(password)