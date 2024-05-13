import asyncio

from httpx import Client, Response
from app.celery_app import celery_app
from app.core.config import settings


def request_to_update_task(task_id):
    with Client(base_url="http://localhost:8000/api/v1") as ac:
        req: Response = ac.post(
            f"test/update-task/{task_id}", headers={"X-API-Key": settings.API_KEYS[0]}
        )

def check_task_exists(task_id):
    with Client(base_url="http://localhost:8000/api/v1") as ac:
        req: Response = ac.get(
            f"test/admin/{task_id}", headers={"X-API-Key": settings.API_KEYS[0]}
        )
        return True if req.status_code == 200 else False

def task_event_handler():
    state = celery_app.events.State()
    print(state)

    def announce_failed_tasks(event):
        state.event(event)
        # task name is sent only with -received event, and state
        # will keep track of this for us.
        task = state.tasks.get(event['uuid'])

        print('TASK FAILED: %s[%s] %s' % (
            task.name, task.uuid, task.info(),))
        
    def on_event(event):
        state.event(event)
        task = state.tasks.get(event['uuid'])
        print(f'task event: {task.event} \n task state: {task.state} \n task.result: {task.result}')
        # print(f"task of type {type(task)} happened, it has the following props:\n {dir(task)}")

    def task_event_handler(event):
        state.event(event)
        task = state.tasks.get(event['uuid'])
        while not check_task_exists(task.id):
            print('task not yet added to db')
        request_to_update_task(task.id)

    def task_event_handlers(event):
        state.event(event)
        task = state.tasks.get(event['uuid'])
        while not check_task_exists(task.id):
            print('task not yet added to db')
        request_to_update_task(task.id)

    with celery_app.connection() as connection:
        recv = celery_app.events.Receiver(connection, handlers={
                'task-failed': task_event_handler,
                'task-succeeded' : task_event_handlers,
                'task-sent' : task_event_handler,
                'task-received' : task_event_handler,
                'task-revoked' : task_event_handler,
                'task-started' : task_event_handler,
                'task-rejected': task_event_handler,
                'task-retried': task_event_handler
        })
        recv.capture(limit=None, timeout=None, wakeup=False)
