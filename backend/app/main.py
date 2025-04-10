from fastapi import FastAPI
from app.api.routes import router
from app.core.config import setup_cors

app = FastAPI()

setup_cors(app)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
