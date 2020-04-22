import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MessageBox from "../MessageBar/MessageBar";
import axios from "axios";

function Login({ handleLogState, setUser }) {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const validateForm = () => {
    if (username === "" || password === "") {
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      setMessage("Please fill the form correctly");
      setType("warning");
      return;
    }
    const user = {
      username,
      password,
    };
    try {
      let userData = await axios.post(
        "http://localhost:3000/api/user/login",
        user
      );
      setUser(userData.data);
      handleLogState(true);
      history.push("/");
    } catch (e) {
      setMessage(e.toString());
      setType("warning");
    }
  };

  return (
    <div className="container">
      {message !== "" && <MessageBox msg={message} type={type} />}
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
