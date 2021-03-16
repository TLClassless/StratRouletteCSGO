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
    if (this.props.isCT === true) {
      return (
        <div>
          <h1>you are CT</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>you are T</h1>
        </div>
      );
    }
  }
}
