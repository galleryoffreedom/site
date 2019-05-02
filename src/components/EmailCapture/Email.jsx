import React from "react";
import "./email.scss";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="email-container">
        <h4 className="email-cta">Get notified about virtual tours.</h4>
        <form>
          <input
            className="email-address"
            type="text"
            placeholder="Email Address"
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
