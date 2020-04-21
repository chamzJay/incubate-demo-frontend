import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <div className="footer-copyright blue-grey darken-1 white-text ">
          <div className="container center-align">
            <span>Designed by Chamara Senarath</span>
          </div>
        </div>
      </footer>
    );
  }
}
