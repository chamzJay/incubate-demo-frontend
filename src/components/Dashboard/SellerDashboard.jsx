import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
function SellerDashboard() {
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");

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

  const msgComponent = () => {
    if (msg === "" || type === "") {
      return;
    }
    return (
      <div
        className="center"
        style={{
          marginTop: 10,
          padding: 10,
          color: "white",
          backgroundColor: type === "warning" ? "red" : "green",
        }}
      >
        <i className="material-icons left">
          {type === "warning" ? "error" : "check"}
        </i>
        <span>{msg}</span>
      </div>
    );
  };
  return (
    <div className="container">
      {msgComponent()}
      <div className="row">
        <div className="col left">
          <h3>Add Items</h3>
        </div>
        <div className="col right">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddItem displayMessage={displayMessage}></AddItem>
    </div>
  );
}

export default SellerDashboard;
