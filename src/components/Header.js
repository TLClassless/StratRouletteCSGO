import { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="branding">
          <img src="headshot.png" alt="" />
          <h1>Strat Roulette</h1>
        </div>
        <ul className="Navigation">
          <li>Suggest a Strat</li>
        </ul>
      </div>
    );
  }
}
