from celery import Celery
from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)

celery_app = Celery(__name__,
            broker=str(settings.CELERY_BROKER),
            result_backend=str(settings.CELERY_RESULT_BACKEND))