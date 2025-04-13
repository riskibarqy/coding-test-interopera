export const fetchSalesReps = async () => {
    const res = await fetch("http://localhost:8000/api/sales-reps");
    const data = await res.json();
    return data.result;
  };
  