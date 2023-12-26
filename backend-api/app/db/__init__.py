from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from beanie import init_beanie
from app.models import models

from app.core.config import settings

async def init_db():
    client: AsyncIOMotorClient = AsyncIOMotorClient(settings.MONGO_CONNECTION_URL.unicode_string())
    db: AsyncIOMotorDatabase = client.get_database(settings.MONGO_DB_NAME)

    await init_beanie(database=db, document_models=models)

