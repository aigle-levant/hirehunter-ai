# modules
from supabase_client.supabase import create_supabase_client
import supabase
from model.base import ResumeUploadResponse, JobDesc, ResumeDB, KeywordMatch, ResumeRankResponse
# libraries
from fastapi import FastAPI

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
    print(resumes.data)