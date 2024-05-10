from fastapi import APIRouter, Depends, status, Path, HTTPException, Body, Security

from celery.result import AsyncResult

from typing import Annotated
from pydantic import UUID4

from app.celery_app import celery_app
from app.crud.tasks import TaskCrud
from app.crud.users import UserCrud
from app.models.tasks import TaskRunDocument
from app.models.users import UserDocument
from app.schemas.tasks import TaskRunRequest, InitialTaskRunSchema, TaskShortView
from app.enums.tasks import TaskField, TaskType
from app.schemas.users import TokenUser
from app.api.deps import get_authenticated_user
from app.core.config import settings
from app.logs.log_conf import Logger

logger = Logger(__name__)


router = APIRouter()


@router.post("/run-test",
            status_code=status.HTTP_200_OK,
            description="request a new task run")
async def run_task(task_run_request: Annotated[TaskRunRequest, Body(...)],
                   user: Annotated[TokenUser, Depends(get_authenticated_user)]):
    task_result = None
    if task_run_request.task_field == TaskField.penetration_test:
        if task_run_request.task_type == TaskType.network_scan:
            logger.info(f'running a task of field {task_run_request.task_field} and type {task_run_request.task_type}')
            task_result: AsyncResult = celery_app.send_task('demo_task.run_nmap', list(task_run_request.task_params.values()), reply_to=settings.RESULT_BACKEND_QUEUE)

    logger.info('storing task run in db...')
    task: InitialTaskRunSchema = InitialTaskRunSchema(task_celery_id=task_result.id, task_field=task_run_request.task_field, task_type=task_run_request.task_type, status=task_result.status)
    await TaskCrud.insert_task_run(task, user)

@router.get("/user-tests",
            status_code=status.HTTP_200_OK,
            description="fetch tasks by user id")
async def fetch_tasks_with_user_id(user: Annotated[TokenUser, Depends(get_authenticated_user)]) -> list[TaskShortView]:
    tasks: list[TaskShortView] = await TaskCrud.get_tasks_by_user_id(user)
    return tasks

@router.get("/{task_celery_id}",
            status_code=status.HTTP_200_OK,
            description="fetch a task by its UUID")
async def fetch_task_with_celery_id(
                task_celery_id: Annotated[UUID4, Path(...)],
                user: Annotated[TokenUser, Depends(get_authenticated_user)]
                ) -> TaskRunDocument:
    task = await TaskCrud.get_task_by_task_celery_id(task_celery_id)
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='no task with this uuid exists')
    userDB: UserDocument = await UserCrud.get_user_by_username_or_email(user)
    if not userDB.id == task.user_id:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='this user is unauthorized to see this task')
    return task