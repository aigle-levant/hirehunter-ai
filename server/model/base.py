from pydantic import BaseModel
from typing import Optional, List, Dict

class ResumeUploadResponse(BaseModel):
    filename: str
    content_type: str
    size: int
    message: str

class JobDesc(BaseModel):
    title: str
    description: str

class ResumeDB(BaseModel):
    id: Optional[int]
    filename: str
    content: str
    upload_date: Optional[str]

class KeywordMatch(BaseModel):
    filename: str
    keywords: List[str]
    score: float

class ResumeRankResponse(BaseModel):
    rankings: List[KeywordMatch]