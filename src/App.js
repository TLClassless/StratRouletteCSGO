import React, { Component } from "react";

import "./App.css";

class App extends Component {
  myfunction() {
    console.log("CLICKED");
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Strat Name</h1>
        <h3 className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <input type="submit" value="New Strat" className="btn btn-new" />
        <button>
          <img
            src="../../public/logo512.png"
            alt="CT/T Switch"
            onClick={this.myfunction}
          />
        </button>
      </div>
    );
  }
}

export default App;
