from fastapi import APIRouter, File, UploadFile, HTTPException
from services.resume_parser import parse_my_resume
from utils.extract_extra_info import extract_extra_info
from supabase_client.supabase import supabase
from model.base import Resume
import datetime

# prefix -> adds upload in front of all routes in here
router = APIRouter(prefix="/upload")

DEMO_KEYWORDS = ["Python", "JavaScript", "React", "FastAPI", "SQL", "Node.js", "Tailwind", "AI", "Machine Learning"]
# post -> to add something to the server, to POST
# if you're wondering why it's not /resume-parse,
# fastapi doesnt fucking care, its frontend shit
@router.post("/")
async def upload_resume(file: UploadFile = File(...)):
    try:
        file_bytes = await file.read()
        extension = file.filename.split(".")[-1].lower()
        text = parse_my_resume(file_bytes, extension)
        
        # data to be inserted
        data = Resume(
            filename = file.filename,
            file_ext = extension,
            content = text,
            uploaded_at = datetime.datetime.now(datetime.UTC)
        )
        supabase.table("resumes").insert(data.model_dump()).execute()
        
        return {
            "filename": file.filename,
            "extension": extension,
            "length": len(text),
            "message": "Resume uploaded and saved successfully"
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))