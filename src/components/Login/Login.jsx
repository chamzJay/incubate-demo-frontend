import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = {
      name: username,
      password: password,
    };
    console.log(user);
  };

  return (
    <div className="container">
      <div className="card blue-grey darken-1" style={{ marginTop: "20vh" }}>
        <div className="card-content white-text">
          <span className="card-title">
            <i className="material-icons left ">account_circle</i>
            <span>Login</span>
          </span>
          <div className="divider"></div>
          <div className="container">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  type="text"
                  id="name"
                />
                <label htmlFor="name">Username</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  id="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="row">
                <div className="col offset-s6">
                  <div onClick={handleLogin} className="btn z-depth-0">
                    Login
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
