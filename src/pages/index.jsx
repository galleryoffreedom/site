import React from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Email from "../components/EmailCapture/Email.jsx";
import "../styles/app.scss";

export default () => (
  <div className="app">
    <Header />
    <Hero />
    <Email />
  </div>
);
