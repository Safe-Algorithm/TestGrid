from beanie import Document, Indexed, PydanticObjectId
from pydantic import UUID4, model_validator
from datetime import datetime
from app.enums.tasks import TaskStatusEnum, TaskField, TaskType
from typing import Annotated, Any


class TaskRunDocument(Document):
    task_celery_id: Annotated[UUID4, Indexed(unique=True)]
    task_field: TaskField
    task_type: TaskType
    created_at: datetime
    updated_at: datetime
    status: TaskStatusEnum = TaskStatusEnum.running
    result: dict | None = None
    user_id: Annotated[PydanticObjectId, Indexed()]
 
    class Settings:
        name = "tasks"
        validate_on_save = True # instead of validate on assignment

    @model_validator(mode='before')
    @classmethod
    def assign_dates(cls, data: Any) -> Any:
        current_datetime = datetime.utcnow()
        if isinstance(data, dict):
            data['created_at'] = current_datetime
            data['updated_at'] = current_datetime
        return data