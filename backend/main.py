from fastapi import FastAPI
from "teams/players.py" import players
app = FastAPI()

app.include_router(
    prefix=""
)