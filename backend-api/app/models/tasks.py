from beanie import Document, Indexed
from pydantic import UUID4
from datetime import datetime
from app.enums.tasks import TaskStatusEnum, TaskField, TaskType
from typing import Annotated

current_datetime = datetime.utcnow()

class TaskRun(Document):
    task_id: Annotated[UUID4, Indexed(unique=True)]
    task_field: TaskField
    task_type: TaskType
    created_at: datetime = current_datetime
    updated_at: datetime = current_datetime
    status: TaskStatusEnum = TaskStatusEnum.pending
    result: dict
 
    class Settings:
        name = "TaskRun"
        validate_on_save = True # instead of validate on assignment