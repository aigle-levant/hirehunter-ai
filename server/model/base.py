from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List, Dict

class ResumeUploadResponse(BaseModel):
    filename: str
    content_type: str
    size: int
    message: str

class JobDesc(BaseModel):
    description: str

class ResumeFile(BaseModel):
    filename: str
    file_ext: str
    content: str
    uploaded_at: datetime

class ResumeUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone_number: Optional[str] = None
    skills: Optional[List[str]] = None
    experience: Optional[float] = None

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