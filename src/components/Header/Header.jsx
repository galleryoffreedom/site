import React from "react";
import GOFIcon from "./images/GoF-Logo.svg";
import "./header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <GOFIcon />
      </header>
    );
  }
}
