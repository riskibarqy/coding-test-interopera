import os
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)

def chat_with_ai(prompt: str):
    try:
        response = client.chat.completions.create(
            model="gpt-4.1",  
            messages=[{"role": "user", "content": prompt}]
        )
        return {
            "success": True,
            "result": response.choices[0].message.content,
            "error": None,
            "pageInfo": None
        }
    except Exception as e:
        return {
            "success": False,
            "result": None,
            "error": {
                "message": str(e),
                "code": "INTERNAL_SERVER_ERROR"
            }
        }
