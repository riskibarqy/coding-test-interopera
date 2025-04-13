export const fetchSalesReps = async (search = "", limit = 10, offset = 0) => {
  const query = new URLSearchParams({ search, limit, offset }).toString();
  const res = await fetch(`http://localhost:8000/api/sales-reps?${query}`);
  const data = await res.json();
  return data.result;
};
