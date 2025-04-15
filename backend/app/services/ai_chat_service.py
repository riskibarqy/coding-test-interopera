from openai import OpenAI

client = OpenAI(api_key="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")

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
