from fastapi import APIRouter, Request
from app.services.sales_rep_service import load_sales_rep_data
from app.models.sales_rep import SalesRepsData

router = APIRouter()

@router.get("/api/sales-reps", response_model=SalesRepsData)
def get_sales_reps():
    return load_sales_rep_data()

@router.post("/api/ai")
async def ai_endpoint(request: Request):
    """
    Placeholder AI endpoint.
    """
    body = await request.json()
    question = body.get("question", "")
    return {"answer": f"This is a placeholder answer to your question: {question}"}
