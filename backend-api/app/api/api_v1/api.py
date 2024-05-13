from fastapi import APIRouter, Depends

from app.api.api_v1.endpoints import users, tasks

api_router_v1 = APIRouter()

api_router_v1.include_router(users.router, 
                             prefix='/auth', 
                             tags=['users'])

api_router_v1.include_router(tasks.router, 
                             prefix='/test', 
                             tags=['tasks'])

