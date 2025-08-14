# modules
from supabase_client.supabase import create_supabase_client
import supabase
from model.base import Resume, ResumeUploadResponse, ResumeUpdate, JobDesc, ResumeDB, KeywordMatch, ResumeRankResponse
# libraries
from fastapi import FastAPI, HTTPException

app = FastAPI()
supabase = create_supabase_client()

# for everything else
@app.get("/")
async def root():
 return {"greeting":"Hello world"}

# fetch table data
@app.get('/resumes')
async def get_table_data():
    resumes = supabase.table("resumes").select("*").execute()
    return resumes.data

# fetch only one resume
@app.get('/resumes/{resume_id}')
async def get_resume(resume_id: int):
    # SELECT * FROM RESUMES WHERE ID IS...
    resumes = supabase.table("resumes").select("*").eq("id", resume_id).execute()
    return resumes.data[0] # return only one item

# delete one resume
@app.delete("/resumes/{resume_id}")
async def delete_resume(resume_id: int):
    exist = supabase.table("resumes").select("*").eq("id", resume_id).execute()
    if not exist:
        raise HTTPException(status_code=404, detail=f"Item with id {resume_id} not found...")
    resumes = supabase.table("resumes").delete().eq("id", resume_id).execute()
    return { "message" : f"Resume with id {resume_id} deleted successfully!"}

# update one row
@app.patch("/resumes/{resume_id}")
async def update_resume(resume_id: int, resume: ResumeUpdate):
    exist = supabase.table("resumes").select("*").eq("id", resume_id).execute()
    if not exist.data:
        raise HTTPException(status_code=404, detail=f"Item with id {resume_id} not found...")
    update_data = resume.model_dump(exclude_unset=True)
    try:
        supabase.table("resumes").update(update_data).eq("id", resume_id).execute()
        resumes = supabase.table("resumes").select("*").eq("id", resume_id).execute()
        return resumes.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error updating item: {e}")