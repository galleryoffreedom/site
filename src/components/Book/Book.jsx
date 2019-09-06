import React from "react";
import "./book.scss";
import Hero from "../Hero/Hero.jsx";
import TOC from "./Pages/TOC.jsx";
import PageControls from "./PageControls.jsx";

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="book">
                <Hero />
                <TOC />
                <PageControls />
            </div>
        );
    }
}
