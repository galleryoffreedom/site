import React from "react";
import "./email.scss";

export default class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="email-container">
        <div id="mc_embed_signup">
          <form
            action="https://galleryoffreedom.us20.list-manage.com/subscribe/post?u=2b4c8bfb55ef732df9b7bb6dc&amp;id=ff6c90c473"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group form-input">
                <label htmlFor="mce-EMAIL">To:</label>
                <input
                  type="email"
                  value={this.state.value}
                  name="EMAIL"
                  placeholder="Enter your email here"
                  className="required email"
                  id="mce-EMAIL"
                  onChange={this.handleChange}
                />
              </div>
              <div id="mce-responses" className="form-hidden">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                />
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_2b4c8bfb55ef732df9b7bb6dc_ff6c90c473"
                  tabIndex="-1"
                />
              </div>
              <div className="form-input">
                <input
                  type="submit"
                  value="Send"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
