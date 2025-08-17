# libraries
import pymupdf # pdf
from docx import Document # docx
from typing import List

# director
def parse_my_resume(file_bytes: bytes, file_type: str):
    file_type = file_type.lower()
    if file_type == "pdf":
        return parse_pdf(file_bytes)
    elif file_type == "docx":
        return parse_word(file_bytes)
    else:
        raise ValueError("File format is invalid! Only pdf or docx formats are accepted.")

# one for pdf
def parse_pdf(file_bytes: bytes):
    doc = pymupdf.open(stream=file_bytes, filetype="pdf")
    pages_list = []
    for page in doc:
        pages_list.append(page.get_text())
    doc.close()
    return "\n".join(pages_list)

# one for word
def parse_word(file_bytes: bytes):
    # get file stream
    import io
    file_stream = io.BytesIO(file_bytes)
    doc = Document(file_stream)
    full_text = []
    # throw everything extracted into that damn list
    for para in doc.paragraphs:
        full_text.append(para.text)
    return "\n".join(full_text)
