import { Component } from "react";

export default class ctStrat extends Component {
  constructor() {
    super();
    this.state = {
      ctStrats: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`
    );
    const json = await response.json();
    this.setState({
      ctStrats: [].concat(json.strats, json.ct)[
        Math.floor(Math.random() * [].concat(json.strats, json.ct).length)
      ],
    });
  }

  render() {
    console.log(this.state.ctStrats);
    const ctStrat = this.state.ctStrats;

    return (
      <div className="prompt">
        <h1 className="title">{ctStrat.name}</h1>
        <h2 className="description">{ctStrat.desc}</h2>
      </div>
    );
  }
}
