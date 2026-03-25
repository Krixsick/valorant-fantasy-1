from fastapi import APIRouter
import vlrdevapi as vlr


app = APIRouter()

@app.get("/health")
def health():
    try:
        status = vlr.status.check_status()
        return {"status": "online", "vlr_health": status}
    except Exception as e:
        return {"status": "offline", "message": str(e)}
