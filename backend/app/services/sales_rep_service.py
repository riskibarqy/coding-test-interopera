import json
import os

def load_sales_rep_data(query: str = None, limit: int = 5, offset: int = 0):
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
                or any(
                    query in deal["client"].lower()
                    or query in deal["status"].lower()
                    for deal in rep.get("deals", [])
                )
                or any(
                    query in client["name"].lower()
                    or query in client["industry"].lower()
                    or query in client["contact"].lower()
                    for client in rep.get("clients", [])
                )
            )
        ]

    total = len(sales_reps)
    data = sales_reps[offset:offset + limit]


    if limit is not None:
        sales_reps = sales_reps[offset:offset + limit]
    else:
        sales_reps = sales_reps[offset:]

    return {
        "total": total,
        "count": len(sales_reps),
        "offset": offset,
        "limit": limit,
        "data": data
    }
