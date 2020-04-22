import React from "react";
import SellerDashboard from "./SellerDashboard";
import CustomerDashboard from "./CustomerDashboard";
function Dashboard({ user }) {
  return (
    <div>
      {user.role === "customer" ? (
        <CustomerDashboard />
      ) : (
        <SellerDashboard user_id={user.user_id} />
      )}
    </div>
  );
}

export default Dashboard;
