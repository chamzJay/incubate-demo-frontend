import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Footer from "./components/Layouts/Footer";
export class App extends Component {
  state = {
    isLogged: true,
    user: {
      role: "d",
      name: "chamara",
    },
  };

  render() {
    const handleLogout = () => {
      console.log("fd");
      this.setState({
        isLogged: false,
      });
    };
    return (
      <BrowserRouter>
        <Header
          userName={this.state.user.name}
          isLogged={this.state.isLogged}
          handleLogout={handleLogout}
        ></Header>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Dashboard user={this.state.user.role} />}
          />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
