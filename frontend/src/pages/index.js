import { useEffect, useState } from "react";
import { fetchSalesReps } from "../features/salesReps/SalesService";
import { Input } from "@/src/components/ui/input";
import { useDebounce } from "use-debounce";
import { ModeToggle } from "@/src/components/mode-toggle"
import { CardMetrics } from "../components/card-metrics";
import SalesUserList from "../features/salesReps/SalesUserList";
import SalesDealsList from "../features/salesReps/SalesDealsList";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 10;
  const [input, setInput] = useState("");
  const [inputAI, setInputAI] = useState("");
  const [debouncedSearch] = useDebounce(input, 500);

  useEffect(() => {
    setLoading(true);
    fetchSalesReps(debouncedSearch, limit, page * limit)
      .then((res) => setUsers(res))
      .finally(() => setLoading(false));
  }, [debouncedSearch, page]);

  const totalSales = users.reduce((sum, user) =>
    sum +
    user.deals
      .filter((d) => d.status === "Closed Won")
      .reduce((s, d) => s + d.value, 0), 0
  );

  const totalClosedWon = users.reduce((count, user) =>
    count + user.deals.filter((d) => d.status === "Closed Won").length, 0
  );

  const totalReps = users.length;

  const allDeals = users.flatMap((user) =>
    user.deals.map((deal) => ({ ...deal, rep: user.name }))
  );


  return (
    <div className="grid grid-cols grid-rows gap-4">
      {/* Asks AI */}
      <div className="col-span-3 row-auto">
        <Input
          placeholder="Asks Me Anything"
          value={inputAI}
          onChange={(e) => {
            setInputAI(e.target.value);
          }}
        />
      </div>

      {/* Metrics */}
      <div>
        <CardMetrics title={"Total Sales"} value={totalSales} />
      </div>
      <div>
        <CardMetrics title={"Closed Won"} value={totalClosedWon} />
      </div>
      <div>
        <CardMetrics title={"Total Reps"} value={totalReps} />
      </div>

      {/* Search */}
      <div className="col-span-3 row-auto">
        <Input
          placeholder="Search By Sales Rep"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setPage(0);
          }}
        />
      </div>

      {/* Sales User List Table */}
      <div className="col-span-3 row-start">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <SalesUserList
            users={users}
            page={page}
            limit={limit}
            setPage={setPage}
          />
        )}
      </div>

      {/* Deals Table */}
      <div className="col-span-3 row-start">
        <SalesDealsList
          allDeals={allDeals}
          users={users}
        />
      </div>

      {/* Floating Mode Toggle */}
      <div className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full">
        <ModeToggle />
      </div>

    </div>
  );
}
