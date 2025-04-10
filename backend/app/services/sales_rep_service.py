import json
import os

def load_sales_rep_data():
    path = os.path.join(os.path.dirname(__file__), "..", "data", "dummyData.json")
    with open(path, "r") as f:
        return json.load(f)
