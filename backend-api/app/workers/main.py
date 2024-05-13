from app.workers.celery_task_event_handler import task_event_handler


if __name__ == "__main__":
    task_event_handler()