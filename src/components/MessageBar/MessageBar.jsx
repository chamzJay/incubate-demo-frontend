import React from "react";

function MessageBar({ type, msg }) {
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
}

export default MessageBar;
