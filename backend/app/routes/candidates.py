from fastapi import APIRouter
from app.schemas import Candidate

router = APIRouter()

@router.get("/candidates")
def get_candidates():
    return [{"id": 1, "name": "Jane Doe"}, {"id": 2, "name": "John Smith"}]

@router.post("/candidates")
def add_candidate(candidate: Candidate):
    return {"message": f"Candidate {candidate.name} added!"}
