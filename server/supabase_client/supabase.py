# libraries
from supabase import Client, create_client
import os
from dotenv import load_dotenv

load_dotenv()

# type safety
url: str = os.getenv('SUPABASE_URL')
key: str = os.getenv('SUPABASE_KEY')

# point out this annoying ass error with env
if not url or not key:
    raise ValueError("URL AND KEYS NOT FOUND. CHECK THE FILES, PLEASE!")

def create_supabase_client():
    supabase: Client = create_client(url, key)
    return supabase
