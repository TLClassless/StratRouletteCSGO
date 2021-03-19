import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import CtStrat from "./components/ctStrats";
import TStrat from "./components/tStrats";

class App extends Component {
  state = {
    isCT: true,
  };

  render() {
    const isCT = this.state.isCT;
    console.log(isCT);

    let Prompt;

    if (isCT === true) {
      Prompt = <CtStrat />;
    } else {
      Prompt = <TStrat />;
    }

    return (
      <div className={isCT ? "App ct" : "App t"}>
        {Prompt}
        <div className="btn-div">
          <input
            value="New Strat"
            type="button"
            className={isCT ? "ct-btn btn strat-btn" : "t-btn btn strat-btn"}
          />
          <div
            className="switchSides"
            onClick={() => this.setState({ isCT: !isCT })}
          >
            <img
              src="./ctt.png"
              alt="CT/T Switch"
              className="btn switchSides"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
