import React from "react";
import "./hero.scss";
import Video from "./video/GoF-Strolling.mp4";
import Email from "../EmailCapture/Email.jsx";
import { findDOMNode } from "react-dom";
import $ from "jquery";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._handleScroll = this._handleScroll.bind(this);
  }
  componentDidMount() {
    this._handleScroll();
  }

  _handleScroll() {
    // select video element
    var vid = document.getElementById("v0");
    var time = $("#time");
    var scroll = $("#scroll");
    var windowheight = $(window).height() - 20;

    var scrollpos = window.pageYOffset / 400;
    var targetscrollpos = scrollpos;
    var accel = 0;

    // ---- Values you can tweak: ----
    var accelamount = 0.2; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.

    // pause video on load
    vid.pause();

    window.onscroll = function() {
      //Set the video position that we want to end up at:
      targetscrollpos = window.pageYOffset / 400;

      //move the red dot to a position across the side of the screen
      //that indicates how far we've scrolled.
      scroll.css("top", 10 + (window.pageYOffset / 13500) * windowheight);
    };

    setInterval(function() {
      //Accelerate towards the target:
      scrollpos += (targetscrollpos - scrollpos) * accelamount;

      //move the blue dot to a position across the side of the screen
      //that indicates where the current video scroll pos is.
      time.css("top", 10 + (scrollpos / 13500) * 400 * windowheight);

      //update video playback
      vid.currentTime = scrollpos;
      vid.pause();
    }, 30);
  }

  render() {
    return (
      <div className="hero">
        <div id="set-height" />
        <div id="scroll" />
        <div id="time" />
        <div className="video-holder">
          <video id="v0" tabIndex="0" autobuffer="autobuffer" preload="preload">
            <source
              type='video/ogg; codecs="theora, vorbis"'
              src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.ogv"
            />
            <source
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.mp4"
            />
            <p>
              Sorry, your browser does not support the &lt;video&gt; element.
            </p>
          </video>
        </div>
      </div>
    );
  }
}
