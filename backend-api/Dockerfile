FROM python:3.10.12

WORKDIR /app


RUN apt-get update && apt-get install -y curl \
    && curl -sSL https://install.python-poetry.org | POETRY_HOME=/usr/local python3 - \
    && poetry config virtualenvs.create false

COPY poetry.lock pyproject.toml /app/

RUN poetry install

COPY . /app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
