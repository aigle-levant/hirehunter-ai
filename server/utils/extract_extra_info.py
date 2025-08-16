# modules
import re

def extract_extra_info(text: str, keywords: list = None):
    # email
    emails = re.findall(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", text)
    # phone numbers
    phones = re.findall(r"(\+?\d{1,4}[\s-]?)?\d{10}", text)
    
    # extract keywords
    keywords_found = []
    if keywords:
        lower_text = text.lower()
        for keys in keywords:
            if keys.lower() in lower_text:
                keywords_found.append(keys)
    
    return {
        "emails": emails,
        "phones": phones,
        "keywords": keywords_found
    }