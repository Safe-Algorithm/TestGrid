from beanie.operators import Or
from beanie import WriteRules
from app.schemas.tasks import InitialTaskRunSchema, TaskShortView
from app.schemas.users import TokenUser
from app.crud.users import UserCrud
from app.models.users import UserDocument
from app.models.tasks import TaskRunDocument
from app.logs.log_conf import Logger
from pydantic import UUID4

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
