from pydantic import BaseModel
from typing import List, Optional

class SalesRep(BaseModel):
    name: str
    role: str
    region: str
    skills: List[str]
    deals: list
    clients: list

class PaginatedResponse(BaseModel):
    total: int
    count: int
    offset: int
    limit: Optional[int]
    data: List[SalesRep]
