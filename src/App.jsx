import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Footer from "./components/Layouts/Footer";
export class App extends Component {
  state = {
    isLogged: false,
    user: {},
  };

  render() {
    const handleLogState = (state) => {
      this.setState({
        isLogged: state,
      });
    };
    const setUser = (user) => {
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
            component={() => (
              <Login handleLogState={handleLogState} setUser={setUser} />
            )}
          />
          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                user={this.state.user}
                isLogged={this.state.isLogged}
              />
            )}
          />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
