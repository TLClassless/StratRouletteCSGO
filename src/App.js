import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    side: [
      {
        id: 1,
        counterTerrorist: true,
      },
      {
        id: 2,
        counterTerrorist: false,
      },
    ],
  };

  getBackground = () => {
    return {
      background: "#f4f4f4",
      padding: "19px",
    };
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.getBackground()}> Hello World </h3>
      </div>
    );
  }
}

export default App;
