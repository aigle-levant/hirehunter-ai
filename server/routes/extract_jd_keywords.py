# libraries
from fastapi import APIRouter
# modules
from model.base import JobDesc
from services.jd_parser import extract_keywords_from_jd

router = APIRouter(prefix="/jd")

@router.post("/extract-keywords")
async def extract_keywords(text: JobDesc):
    keywords = extract_keywords_from_jd(text.jd)
    return { "keywords found": keywords }