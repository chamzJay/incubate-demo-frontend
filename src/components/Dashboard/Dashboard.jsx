import React, { useEffect } from "react";
import SellerDashboard from "./SellerDashboard";
import CustomerDashboard from "./CustomerDashboard";
import { useHistory } from "react-router-dom";

function Dashboard({ user, isLogged }) {
  const history = useHistory();

  useEffect(() => {
    if (!isLogged) {
      history.push("/");
    }
  }, [history, isLogged]);
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
