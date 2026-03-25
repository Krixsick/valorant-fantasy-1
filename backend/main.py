from fastapi import FastAPI
from teams.players import app as players_router
app = FastAPI()

app.include_router(
    players_router,
    prefix="/teams"
)