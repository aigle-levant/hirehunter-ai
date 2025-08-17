from fastapi import APIRouter, Body
from typing import List, Union
from model.base import JobDesc
from services.jd_parser import extract_keywords_multi_jds

router = APIRouter(prefix="/jd")

@router.post("/keywords-multi")
async def extract_keywords_multi(
    jds: Union[List[JobDesc], dict] = Body(...)
):
    if isinstance(jds, dict) and "jds" in jds:
        jds = jds["jds"]

    jd_texts = [jd.jd if isinstance(jd, JobDesc) else jd for jd in jds]

    result = extract_keywords_multi_jds(jd_texts)

    return result