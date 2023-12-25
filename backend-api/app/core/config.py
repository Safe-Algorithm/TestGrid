from pydantic import EmailStr, MongoDsn, validator, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

from app.logs.log_conf import Logger

logger = Logger(__name__)


class Settings(BaseSettings):
    MONGO_CONNECTION_URL: MongoDsn
    MONGO_TESTDB_CONNECTION_URL: MongoDsn
    MONGO_DB_NAME: str

    JWT_SECRET: str
    DEBUG_MODE: bool
    BACKEND_CORS_ORIGINS: list[str] = []
    API_V1_STR: str | None = None
    PROJECT_NAME: str = "Default Project"

    ENABLE_AUTH_FEATURE: bool = True

    model_config = SettingsConfigDict(case_sensitive=True)

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