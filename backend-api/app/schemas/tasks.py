from pydantic import BaseModel, EmailStr
from datetime import datetime

from app.enums.tasks import TaskField, TaskType



class TaskRunRequest(BaseModel):
    task_field: TaskField
    task_type: TaskType
    task_params: dict