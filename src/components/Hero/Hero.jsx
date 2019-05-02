import React from "react";
import "./hero.scss";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <h1>Gallery of Freedom</h1>
        <h1>
          A virtual space for marginalized communitites to tell their stories
          and connect with one another.
        </h1>
        <span className="spacer" />
        <h1>
          Join the community on{" "}
          <a href="/" className="link">
            Discord
          </a>
          . Follow us on{" "}
          <a href="/" className="link">
            Instagram
          </a>{" "}
          and{" "}
          <a href="/" className="link">
            Twitter
          </a>
          . For questions and inquiries send us an{" "}
          <a href="/" className="link">
            email
          </a>
          .
        </h1>
        <span className="spacer" />
      </div>
    );
  }
}
