from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.api.api_v1.api import api_router_v1
from app.core.config import settings
from app.db import init_db
from app.logs.log_conf import Logger

logger = Logger(__name__)



@asynccontextmanager
async def lifespan(app: FastAPI):
   logger.info("initiating db connection...")
   await init_db()
   yield

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan
)


if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router_v1, prefix=settings.API_V1_STR)

@app.get("/")
def health_check():
    return "TestGrid:Ok"