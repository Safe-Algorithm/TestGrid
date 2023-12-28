# TestGrid

A cloud-based SAAS platform for load and penetration testing

---

# FastAPI backend API Setup and Run Guide

This guide will help you set up and run the backend FastAPI app. Make sure you have Python 3.10.12 installed on your system before proceeding.

## Backend Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Safe-Algorithm/TestGrid.git
   cd TestGrid/backend-api
   ```

2. **Install Dependencies**

   We use Poetry for managing dependencies. If you haven't installed Poetry yet, [follow the installation guide here](https://python-poetry.org/docs/).

   ```bash
   poetry install
   ```

3. **Environment Configuration**

   Copy the provided `env.example` file to `base.env`. This file contains necessary environment variables.

   ```bash
   cp env.example base.env
   ```

4. **Spawning shell**

   activate a shell using the project's virtual environment.

   ```bash
   poetry shell
   ```

## Running the App

To start the FastAPI app, run the following command:

```bash
uvicorn app.main:app --reload --port 5007 --env-file base.env
```

This command starts the server and sets it up to reload on code changes. You can access the app at [http://localhost:5007](http://localhost:5007).

## Notes

- Remember to modify environment variables in `base.env` as needed for your specific setup.

---

## Frontend Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Safe-Algorithm/TestGrid.git
   ```

2. **Change Current Directory**
   ```bash
   cd frontend
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Running the App**
   ```bash
   npm run dev
   ```
