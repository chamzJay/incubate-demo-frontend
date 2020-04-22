import React from "react";

export default function Header({ username, isLogged, handleLogState }) {
  const logoutUser = () => {
    handleLogState(false);
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1 z-depth-0">
        <div
          style={{ marginLeft: "1vw" }}
          className="left brand-logo hide-on-sm"
        >
          IncubateLabs
        </div>
        {isLogged && (
          <ul id="nav-mobile" className="right ">
            <li style={{ marginRight: 30 }}>
              <span>Hi {username}</span>
            </li>
            <li>
              <div
                onClick={logoutUser}
                style={{ marginRight: 30 }}
                className="btn-small z-depth-0"
              >
                Logout
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
