import { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="branding">
          <img src="headshot.png" alt="" />
          <h1>CS:GO Strat Roulette</h1>
        </div>
      </div>
    );
  }
}
