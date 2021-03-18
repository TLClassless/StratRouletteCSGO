import { Component } from "react";
import axios from "axios";

export default class StratList extends Component {
  state = {
    ctStrats: [],
    tStrats: [],
  };

  async componentDidMount() {
    const ctStrats = await axios
      .get(`https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`)
      .then((res) => {
        this.setState({
          ctStrats: [].concat(res.data.strats, res.data.ct),
        });
      });

    const tStrats = await axios
      .get(`https://tlclassless.github.io/stratRouletteAPI/Data/strats.json`)
      .then((res) => {
        this.setState({
          tStrats: [].concat(res.data.strats, res.data.t),
        });
      });
  }

  render() {
    const ct = this.state.ctStrats;
    const t = this.state.tStrats;

    console.log(ct, t);

    const ctStrat = ct[Math.floor(Math.random() * ct.length)];
    const tStrat = t[Math.floor(Math.random() * t.length)];

    if (this.props.isCT === true) {
      return (
        <div>
          {/* <h1>{ctStrat.name}</h1> */}
          {/* <h3>{ctStrat.desc}</h3> */}
        </div>
      );
    } else {
      return (
        <div>
          <h1>{tStrat.name}</h1>
          <h3>{tStrat.desc}</h3>
        </div>
      );
    }
  }
}
