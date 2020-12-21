import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get(`https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`)
      .then((res) => {
        const strat = res.data.strats;
        const stratSelect = strat[Math.floor(Math.random() * strat.length)];
        this.setState(() => {
          return stratSelect;
        });
      });
  }

  state = {};

  render() {
    return (
      <div className="App ct">
        <h1 className="title">{this.state.name}</h1>
        <h3 className="description cont-3rd-width">{this.state.desc}</h3>
        <div className="btn-div">
          <input
            type="submit"
            value="New Strat"
            className="btn strat-btn ct-btn"
          />
          <img src="./ctt.png" alt="CT/T Switch" className="btn" />
        </div>
      </div>
    );
  }
}

export default App;
