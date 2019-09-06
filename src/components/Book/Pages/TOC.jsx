import React from "react";
import "./TOC.scss";

export default class TOC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="TOC">
                <h3>Table of Contents</h3>
                <h4>PREFACE...</h4>
                <h4>ARTISTS</h4>
                <ul>
                    <li>Neek Diaz</li>
                    <li>Daniel Peixe</li>
                    <li>Rosie Summers</li>
                    <li>Kevin Ang</li>
                    <li>Edward Madojemu</li>
                    <li>Funi Lab</li>
                </ul>

            </div>
        );
    }
}
