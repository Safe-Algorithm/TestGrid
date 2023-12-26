from fastapi import APIRouter, Depends

from app.api.api_v1.endpoints import users
from app.api.deps import check_api_key

api_router_v1 = APIRouter()

api_router_v1.include_router(users.router, 
                             prefix='/auth', 
                             tags=['users'], 
                             dependencies=[Depends(check_api_key)])

