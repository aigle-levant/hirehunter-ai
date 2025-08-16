# libraries
from fastapi import APIRouter
from typing import List
# modules
from model.base import JobDesc
from services.jd_parser import extract_keywords_from_jd

router = APIRouter(prefix="/jd")

@router.post("/keywords")
async def extract_keywords(text: JobDesc):
    if not text.jd.strip():
        return {"keywords": []}
    keywords = extract_keywords_from_jd(text.jd)
    return { "keywords found": keywords }

@router.post("/keywords-multi")
async def extract_keywords_multi(jds: List[JobDesc]):
    result = []
    for jd in jds:
        kws = extract_keywords_from_jd(jd.jd)
        result.append({"jd": jd.jd, "keywords": kws})
    return result