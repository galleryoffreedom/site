import React from "react";
import "./hero.scss";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="hero">
        <h1>What is Gallery of Freedom?</h1>
        <div className="cta-buttons">
          <button>DOWNLOAD GOF</button>
          <button className="community" >JOIN COMMUNITY</button>
        </div>
      </div>
    );
  }
}
