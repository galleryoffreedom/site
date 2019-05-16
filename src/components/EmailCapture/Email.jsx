import React from "react";
import "./email.scss";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="email-container">
        <h4 className="email-cta">Get notified about virtual tours.</h4>
        <form
          class="gform"
          method="POST"
          data-email="rluu34@gmail.com"
          action="https://script.google.com/macros/s/AKfycbwCka1fBUp7cvMvAFmV_0LEBIcEvNY5tdC9XjJ5dzX-gWLEQn0/exec"
        >
          <input
            className="email-address"
            type="text"
            placeholder="Email Address"
            name="email"
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
