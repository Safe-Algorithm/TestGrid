from datetime import datetime
from celery.result import AsyncResult
from beanie.operators import Or
from beanie import WriteRules
from app.schemas.tasks import InitialTaskRunSchema, TaskShortView
from app.schemas.users import TokenUser
from app.enums.tasks import TaskStatusEnum
from app.crud.users import UserCrud
from app.models.users import UserDocument
from app.models.tasks import TaskRunDocument
from app.celery_app import celery_app
from app.logs.log_conf import Logger
from pydantic import UUID4
import uuid
import json

logger = Logger(__name__)

class TaskCrud:
    @classmethod
    async def insert_task_run(cls, task: InitialTaskRunSchema, user: TokenUser):
        """insert task in db

        :params task (InitialTaskRunSchema): task to insert
        :params user (TokenUser): user to associate with this task
        """
        userDB: UserDocument = await UserCrud.get_user_by_username_or_email(user)
        logger.info('inserting task in db...')
        await TaskRunDocument.insert_one(TaskRunDocument(**task.model_dump(), user_id=userDB.id))

    @classmethod
    async def get_task_by_task_celery_id(cls, task_celery_id: UUID4) -> TaskRunDocument | None:
        """retrieve task with task celery id

        :params task_celery_id(UUID4): id of task to retrieve

        :return: TaskRunDocument or None
        """
        logger.info(f'retrieving task with task celery id: {task_celery_id}')
        return await TaskRunDocument.find_one(TaskRunDocument.task_celery_id == task_celery_id)
    
    @classmethod
    async def get_tasks_by_user_id(cls, user: TokenUser, skip: int = 0, limit: int = 1000) -> list[TaskShortView] | None:
        """retrieve task with user id

        :params user(TokenUser): user to retrieve tasks for

        :return: list[TaskRunDocument] or None
        """
        userDB: UserDocument = await UserCrud.get_user_by_username_or_email(user)
        logger.info(f'retrieving tasks for user with id: {userDB.id}')
        return await TaskRunDocument.find_many(TaskRunDocument.user_id == userDB.id).skip(skip).limit(limit).project(TaskShortView).to_list()

    @classmethod
    async def update_task_run(cls, celery_task_id: UUID4):
        """update task in db

        :params celery_task_id (UUID4): id of task to update
        """
        logger.info(f'retrieving result of task with celery task id: {celery_task_id}')
        result = AsyncResult(str(celery_task_id), backend=celery_app.backend, app=celery_app)
        task_DB: TaskRunDocument = await cls.get_task_by_task_celery_id(uuid.UUID(result.id))
        logger.info(f'retrieved task from db with id: {task_DB.id}') 

        current_datetime = datetime.utcnow()
        logger.info(f'update time before update: {task_DB.updated_at}') 
        task_DB.updated_at = current_datetime
        logger.info(f'update time after update: {task_DB.updated_at}') 
        # celery result status options: https://docs.celeryq.dev/en/stable/reference/celery.result.html#celery.result.AsyncResult.status
        logger.info(f'status before update: {task_DB.status}') 
        if result.status == 'PENDING':
            task_DB.status = TaskStatusEnum.pending
        if result.status == 'RETRY':
            task_DB.status = TaskStatusEnum.pending
        if result.status == 'STARTED':
            task_DB.status = TaskStatusEnum.running
        if result.status == 'FAILURE':
            task_DB.status = TaskStatusEnum.failed
        if result.status == 'SUCCESS':
            task_DB.status = TaskStatusEnum.success
            logger.info(f'result before update: {task_DB.result}') 
            task_DB.result = json.loads(result.get(propagate=False, timeout=5))
            logger.info(f'result after update: {task_DB.result}') 
        logger.info(f'status after update: {task_DB.status}') 

        try:
            logger.info('saving updated task object...') 
            await task_DB.save()
            if task_DB.status == TaskStatusEnum.success:
                result.forget()
        except Exception as e:
            logger.info(f"couldn't update task with task id: {celery_task_id} \n {e}")