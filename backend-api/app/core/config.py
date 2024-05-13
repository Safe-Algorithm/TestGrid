import os

from pydantic import EmailStr, MongoDsn, validator, field_validator, AnyUrl
from pydantic_settings import BaseSettings, SettingsConfigDict

from app.logs.log_conf import Logger

logger = Logger(__name__)

env_file_path = os.path.join(os.path.dirname(__file__), '../../base.env')

class Settings(BaseSettings):
    MONGO_CONNECTION_URL: MongoDsn
    MONGO_TESTDB_CONNECTION_URL: MongoDsn
    MONGO_DB_NAME: str

    JWT_SECRET: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 10
    API_KEYS: list[str]
    DEBUG_MODE: bool
    BACKEND_CORS_ORIGINS: list[str] = []
    API_V1_STR: str | None = None
    PROJECT_NAME: str = "Default Project"

    ENABLE_AUTH_FEATURE: bool = True

    CELERY_BROKER: AnyUrl
    CELERY_RESULT_BACKEND: AnyUrl
    CELERY_RESULT_BACKEND_DB: str
    CELERY_BACKEND_MONGO_TASK_META_DATA_COLLECTION_NAME: str
    FLOWER_API_BASE_URL: AnyUrl

    model_config = SettingsConfigDict(env_file=env_file_path, case_sensitive=True)

    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: str | list[str]) -> list[str] | str:
        logger.info('parsing CORS setting')
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)
    
    @validator("MONGO_CONNECTION_URL")
    def validate_mongo_url(cls, v: MongoDsn):
        # remove port if remote url
        if "+srv" in v.scheme: 
            logger.info(f'removing port from db schema {v.scheme}')
            s = v.hosts()[0]
            s["port"] = None
            return v.build(**s, scheme = v.scheme)
        return v
    


    

settings = Settings()
print(settings)