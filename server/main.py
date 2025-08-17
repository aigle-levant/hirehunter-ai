# modules
from routes.upload_resume import router as upload_resume_router
from routes.extract_jd_keywords import router as jd_router
from supabase_client.supabase import create_supabase_client
import supabase
import os
from model.base import Resume, ResumeUploadResponse, ResumeUpdate, JobDesc, ResumeDB, KeywordMatch, ResumeRankResponse
# libraries
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()
# to fix that one annoying supabase error
supabase = create_supabase_client()

# define cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# mount the files
dist_path = os.path.join(os.path.dirname(__file__), "../client/dist/")
app.mount("/static", StaticFiles(directory=os.path.join(dist_path, "assets")), name="static")

# use endpoints
app.include_router(upload_resume_router, prefix="/api")
app.include_router(jd_router, prefix="/api")

@app.get("/api")
async def root():
    return {"greeting": "Hello world"}

# fetch table data
@app.get('/api/resumes')
async def get_table_data():
    resumes = supabase.table("resumes").select("*").execute()
    return resumes.data

# fetch only one resume
@app.get('/api/resumes/{resume_id}')
async def get_resume(resume_id: int):
    resumes = supabase.table("resumes").select("*").eq("id", resume_id).execute()
    return resumes.data[0]

# delete one resume
@app.delete("/api/resumes/{resume_id}")
async def delete_resume(resume_id: int):
    exist = supabase.table("resumes").select("*").eq("id", resume_id).execute()
    if not exist.data:
        raise HTTPException(status_code=404, detail=f"Item with id {resume_id} not found...")
    supabase.table("resumes").delete().eq("id", resume_id).execute()
    return {"message": f"Resume with id {resume_id} deleted successfully!"}

# update one row
@app.patch("/api/resumes/{resume_id}")
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

@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    """
    Forwards all non-API routes to React index.html
    so React Router can handle frontend routing.
    """
    index_file = os.path.join(dist_path, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    raise HTTPException(status_code=404, detail="Frontend not built yet.")