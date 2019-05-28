import React from "react";
import "./hero.scss";
import Email from "../EmailCapture/Email.jsx";
var date = new Date().getDate();

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: ""
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear().toString(); //Current Year
    var yrSlice = year.slice(2);
    that.setState({
      //Setting the value of the date time
      date: month + "/" + date + "/" + yrSlice
    });
  }

  render() {
    return (
      <div className="hero">
        <p>
          "Gallery of Freedom" &#60;mail&#64;galleryoffreedom.com&#62; on{" "}
          {this.state.date}
        </p>
        <Email />
        <p>Subject: A message from the creators</p>
        <p>Hey there,</p>
        <p>
          Gallery of Freedom, GoF for short, is a new art organization based in
          virtual reality that curates VR artworks from artists working with
          tools such as Quill, Tilt Brush, Oculus Medium, Google Blocks, and
          more. This project started as a place to view VR artwork and connect
          with others, but has quickly grown into a community of artists and
          enthusiasts.
        </p>
        <p>
          The gallery is currently in closed beta. If you'd like to schedule a
          tour, just enter your email above or reach out.
        </p>
        <p>
          If you're interested you can join our
          <span />
          <a href="https://discord.gg/ad8wSEZ" className="link">
            Discord
          </a>
          . You can also get updates and follow the project on
          <span />
          <a
            href="https://www.instagram.com/galleryoffreedom/"
            className="link"
          >
            Instagram
          </a>
          <span />
          and
          <span />
          <a href="https://twitter.com/galleryfreedom" className="link">
            Twitter
          </a>
          .
        </p>
        <p>See you soon :)</p>
        <p>- Team</p>
        <p>
          *PS: special thanks to our contributors "Brendan", "Litpanda",
          "Milan", "Micah.404", "Daniel Peixe", "Sneekypops", "Funilab", "Felix
          Stief", "Gianpaolo Gonzalez", "Edward Madojem"{" "}
        </p>
      </div>
    );
  }
}
