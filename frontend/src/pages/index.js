import { useEffect, useState } from "react";
import { fetchSalesReps } from "../features/salesReps/SalesService";
import SalesList from "../features/salesReps/SalesList";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSalesReps()
      .then((res) => setUsers(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "2rem" }} className="bg-red-50">
      <h1>Sales Reps</h1>
      {loading ? <p>Loading...</p> : <SalesList users={users} />}
    </div>
  );
}
