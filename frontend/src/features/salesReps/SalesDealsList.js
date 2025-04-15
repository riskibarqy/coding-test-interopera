import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function DealsBarChart({ users }) {
  if (!users || users.length === 0) {
    return <p>No sales reps found.</p>;
  }

  const chartData = users.map((user) => ({
    name: user.name,
    closedWon: user.deals
      .filter((deal) => deal.status === "Closed Won")
      .reduce((sum, deal) => sum + deal.value, 0),
  }));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Closed Won Deals by Rep</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="closedWon" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
