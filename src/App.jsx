import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Footer from "./components/Layouts/Footer";
export class App extends Component {
  state = {
    isLogged: true,
    user: {},
  };

  render() {
    const handleLogState = (state) => {
      console.log("fd");
      this.setState({
        isLogged: state,
      });
    };
    const setUser = (user) => {
      console.log(user);
      this.setState({
        user,
      });
    };
    return (
      <BrowserRouter>
        <Header
          username={this.state.user.username}
          isLogged={this.state.isLogged}
          handleLogState={handleLogState}
        ></Header>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Dashboard user={this.state.user} />}
          />
          <Route
            path="/login"
            component={() => (
              <Login handleLogState={handleLogState} setUser={setUser} />
            )}
          />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
