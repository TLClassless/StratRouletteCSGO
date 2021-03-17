import { Component } from "react";
import axios from "axios";

export default class StratList extends Component {
  state = {
    strats: [],
  };

  componentDidMount() {
    axios
      .get(`https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`)
      .then((res) => {
        console.log(res.data);
        this.setState({ strats: res.data });
      });
  }

  render() {
    const ctStrats = this.state.strats.ct;
    const strats = this.state.strats.strats;
    const tStrats = this.state.strats.t;

    const ct = [].concat(ctStrats, strats);
    const t = [].concat(tStrats, strats);

    const ctStrat = ct[Math.floor(Math.random() * ct.length)];
    // const ctStratName = JSON.stringify(ctStrat["name"]);
    // const ctStratDesc = JSON.stringify(ctStrat["desc"]);

    const tStrat = t[Math.floor(Math.random() * t.length)];

    if (this.props.isCT === true) {
      return (
        <div>
          <h1>CT</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{JSON.stringify(tStrat["name"])}</h1>
          <h3>{JSON.stringify(tStrat["desc"])}</h3>
        </div>
      );
    }
  }
}
