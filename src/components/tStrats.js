import { Component } from "react";

export default class tStrat extends Component {
  constructor() {
    super();
    this.state = {
      tStrats: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`
    );
    const json = await response.json();
    this.setState({
      tStrats: [].concat(json.strats, json.t)[
        Math.floor(Math.random() * [].concat(json.strats, json.t).length)
      ],
    });
  }

  render() {
    console.log(this.state.tStrats);
    const tStrat = this.state.tStrats;

    return (
      <div className="prompt">
        <h1 className="title">{tStrat.name}</h1>
        <h2 className="description">{tStrat.desc}</h2>
      </div>
    );
  }
}
