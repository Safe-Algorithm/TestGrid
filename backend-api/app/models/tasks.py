from beanie import Document, Indexed, PydanticObjectId
from pydantic import UUID4
from datetime import datetime
from app.enums.tasks import TaskStatusEnum, TaskField, TaskType
from typing import Annotated

current_datetime = datetime.utcnow()

class TaskRunDocument(Document):
    task_celery_id: Annotated[UUID4, Indexed(unique=True)]
    task_field: TaskField
    task_type: TaskType
    created_at: datetime = current_datetime
    updated_at: datetime = current_datetime
    status: TaskStatusEnum = TaskStatusEnum.running
    result: dict | None = None
    user_id: Annotated[PydanticObjectId, Indexed()]
 
    class Settings:
        name = "tasks"
        validate_on_save = True # instead of validate on assignment