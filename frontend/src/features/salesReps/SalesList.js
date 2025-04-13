import React from "react";

export default function SalesList({ users }) {
  if (!users || users.length === 0) {
    return <p>No sales reps found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.role} ({user.region})
        </li>
      ))}
    </ul>
  );
}
