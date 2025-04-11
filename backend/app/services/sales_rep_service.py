import json
import os

def load_sales_rep_data(query: str = None, limit: int = 5, offset: int = 0):
    try:
        path = os.path.join(os.path.dirname(__file__), "..", "data", "dummyData.json")
        with open(path, "r") as f:
            data = json.load(f)
        
        sales_reps = data.get("salesReps", [])

        if query:
            query = query.lower()
            sales_reps = [
                rep for rep in sales_reps if (
                    query in rep["name"].lower()
                    or query in rep["role"].lower()
                    or query in rep["region"].lower()
                    or any(query in skill.lower() for skill in rep.get("skills", []))
                    or any(query in deal["client"].lower() or query in deal["status"].lower()
                           for deal in rep.get("deals", []))
                    or any(query in client["name"].lower()
                           or query in client["industry"].lower()
                           or query in client["contact"].lower()
                           for client in rep.get("clients", []))
                )
            ]
        
        total = len(sales_reps)
        data = sales_reps[offset:offset+limit]
        count = len(data)

        return {
            "success": True,
            "data": data,
            "error": None,
            "pageInfo": {
                "limit": limit,
                "offset": offset,
                "total": total,
                "count": count
            }
        }
    
    except Exception as e:
        return {
            "success": False,
            "data": None,
            "error": {
                "message": str(e),
                "code": "INTERNAL_SERVER_ERROR"
            },
            "pageInfo": None
        }