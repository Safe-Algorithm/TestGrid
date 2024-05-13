from celery import Celery
from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)

logger.info('initializing celery app')
celery_app = Celery(__name__,
            broker=settings.CELERY_BROKER.unicode_string(),
            result_backend=settings.CELERY_RESULT_BACKEND.unicode_string())

celery_app.conf.update(
    mongodb_backend_settings = {
    'database': settings.CELERY_RESULT_BACKEND_DB,
    'taskmeta_collection': settings.CELERY_BACKEND_MONGO_TASK_META_DATA_COLLECTION_NAME,
    },
    result_persistent=True,
    task_serializer='json',
    accept_content=['application/json'],  # Ignore other content
    result_accept_content=['application/json'],
    enable_utc=True,
    worker_send_task_events=True,
    task_send_sent_event=True,
    task_track_started=True,
)