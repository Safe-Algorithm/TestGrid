from celery import Celery
from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)

celery_app = Celery(__name__,
            broker=settings.CELERY_BROKER.unicode_string(),
            result_backend=settings.CELERY_RESULT_BACKEND.unicode_string())