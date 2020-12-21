import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    strats: [],
  };

  componentDidMount() {
    axios
      .get(`https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`)
      .then((res) => {
        const strat = res.data.strats;
        const stratSelect = strat[Math.floor(Math.random() * strat.length)];
        console.log(stratSelect);
        this.setState({ stratSelect });
      });
  }

  render() {
    return (
      <div className="App ct">
        <h1 className="title">Strat Name</h1>
        <h3 className="description cont-3rd-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div>
          <input type="submit" value="New Strat" className="btn btn-new" />
          <button>
            <img src="../../public/logo512.png" alt="CT/T Switch" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
