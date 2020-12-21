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
