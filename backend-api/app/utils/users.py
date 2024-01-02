import jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta

from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)

pwd_context = CryptContext(schemes=["bcrypt"], default="bcrypt", deprecated="auto")

async def verify_password(plain_password, hashed_password) -> bool:
    logger.info(f"verifying password hash of password: {plain_password} with hash: {hashed_password}")
    return pwd_context.verify(plain_password, hashed_password)

async def get_password_hash(password) -> str:
    logger.info(f"hashing password {password}")
    return pwd_context.hash(password)

async def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire_date = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire_date})
    encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET, algorithm="HS256")
    return encoded_jwt