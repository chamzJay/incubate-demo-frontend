import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import MessageBar from "../MessageBar/MessageBar";
function SellerDashboard() {
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const displayMessage = (type, msg) => {
    setType(type);
    setMsg(msg);
    if (type === "success") {
      setTimeout(() => {
        setType("");
        setMsg("");
      }, 1000);
    }
  };

  const setLoadingState = (state) => {
    setLoading(state);
  };

  const msgComponent = () => {
    if (msg === "" || type === "") {
      return;
    }
    return <MessageBar msg={msg} type={type} />;
  };
  return (
    <div className="container">
      {msgComponent()}

      <h3>Add Items</h3>

      <AddItem
        setLoadingState={setLoadingState}
        displayMessage={displayMessage}
      ></AddItem>
      {loading && (
        <div>
          <span>Posting....</span>
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellerDashboard;
