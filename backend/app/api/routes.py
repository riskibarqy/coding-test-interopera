from fastapi import APIRouter, Query
from app.services.sales_rep_service import load_sales_rep_data
from app.services.ai_chat_service import chat_with_ai
from app.models.base import StandardResponse
from app.models.ai import AIRequest

router = APIRouter()

@router.get("/api/sales-reps", response_model=StandardResponse)
def get_sales_reps(
        search: str = Query(None), 
        limit: int = Query(5), 
        offset: int = Query(0)
    ):
    return load_sales_rep_data(search, limit, offset)

@router.post("/api/ai")
async def ai_endpoint(request: AIRequest):
    result = chat_with_ai(request.prompt)
    return {"response": result}