from pydantic import BaseModel, UUID4
from datetime import datetime

from app.enums.tasks import TaskField, TaskType, TaskStatusEnum



class TaskRunRequest(BaseModel):
    task_field: TaskField
    task_type: TaskType
    task_params: dict

class InitialTaskRunSchema(BaseModel):
    task_celery_id: UUID4
    task_field: TaskField
    task_type: TaskType
    status: TaskStatusEnum

class TaskShortView(BaseModel):
    task_celery_id: UUID4
    task_field: TaskField
    task_type: TaskType
    created_at: datetime
    updated_at: datetime 
    status: TaskStatusEnum
    