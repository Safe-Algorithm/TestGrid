from fastapi import APIRouter, Depends, status, Path, HTTPException, Body, Security

from typing import Annotated


from app.celery_app import celery_app
from app.schemas.tasks import TaskRunRequest
from app.enums.tasks import TaskField, TaskType
from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)


router = APIRouter()


@router.post("/run-test",
            status_code=status.HTTP_200_OK,
            description="request a new task run")
async def run_task(task_run_request: Annotated[TaskRunRequest, Body(...)]):
    if task_run_request.task_field == TaskField.penetration_test:
        if task_run_request.task_type == TaskType.network_scan:
            logger.info(f'running a task of field {task_run_request.task_field} and type {task_run_request.task_type}')
            celery_app.send_task('demo_task.run_nmap', list(task_run_request.task_params.values()), reply_to=settings.RESULT_BACKEND_QUEUE)
