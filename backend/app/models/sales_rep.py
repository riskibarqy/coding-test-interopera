from pydantic import BaseModel
from typing import List


class Deal(BaseModel):
    client: str
    value: float
    status: str


class Client(BaseModel):
    name: str
    industry: str
    contact: str


class SalesRep(BaseModel):
    id: int
    name: str
    role: str
    region: str
    skills: List[str]
    deals: List[Deal]
    clients: List[Client]


class SalesRepsData(BaseModel):
    salesReps: List[SalesRep]
