# libraries
from fastapi import APIRouter
# modules
from supabase_client.supabase import supabase
from model.base import Resume

# start router
router = APIRouter()

# add a row to resumes table
@router.post("/resumes")
async def add_resumes(resume: Resume):
    supabase.table("resumes").insert(Resume.model_dump()).execute()
    return { "message" : "Resume added" }

