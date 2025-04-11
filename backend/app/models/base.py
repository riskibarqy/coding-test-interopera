from pydantic import BaseModel
from typing import Any, Optional


class ErrorModel(BaseModel):
    message: str
    code: str


class PageInfo(BaseModel):
    limit: int
    offset: int
    total: int
    count:int


class StandardResponse(BaseModel):
    success: bool
    result: Optional[Any]
    error: Optional[ErrorModel]
    pageInfo: Optional[PageInfo]
