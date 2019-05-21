import React from "react";
import "./email.scss";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("hi");
    this.setState({ submitted: true });
  }

  render() {
    const { submitted } = this.state;
    return (
      <div className="email-container">
        <h4 className="email-cta">Get notified about virtual tours.</h4>
        {submitted ? (
          <>
            <div>Thanks</div>
          </>
        ) : (
          <>
            <form
              class="gform"
              method="POST"
              data-email="osebo@galleryoffreedom.com"
              email="osebo@galleryoffreedom.com"
              action="https://script.google.com/macros/s/AKfycbwCka1fBUp7cvMvAFmV_0LEBIcEvNY5tdC9XjJ5dzX-gWLEQn0/exec"
              target="hidden-iframe"
            >
              <input
                className="email-address"
                id="userEmail"
                type="text"
                placeholder="Email Address"
                name="email"
              />
              <input className="submit" type="submit" value="Submit" />
              <iframe name="hidden-iframe" style={{ display: "none" }} />
            </form>
          </>
        )}
      </div>
    );
  }
}
