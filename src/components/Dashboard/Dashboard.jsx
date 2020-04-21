import React from "react";
import SellerDashboard from "./SellerDashboard";
import CustomerDashboard from "./CustomerDashboard";
function Dashboard({ user }) {
  return (
    <div>
      {user === "customer" ? <CustomerDashboard /> : <SellerDashboard />}
    </div>
  );
}

export default Dashboard;
