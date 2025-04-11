from fastapi import APIRouter, Request, Query
from app.services.sales_rep_service import load_sales_rep_data
from app.models.base import StandardResponse

router = APIRouter()

@router.get("/api/sales-reps", response_model=StandardResponse)
def get_sales_reps(
        search: str = Query(None), 
        limit: int = Query(5), 
        offset: int = Query(0)
    ):
    return load_sales_rep_data(search, limit, offset)

@router.post("/api/ai")
async def ai_endpoint(request: Request):
    """
    Placeholder AI endpoint.
    """
    body = await request.json()
    question = body.get("question", "")
    return {"answer": f"This is a placeholder answer to your question: {question}"}
