import React from "react";
import "./book.scss";

export default class PageControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="page-controls">
                <button><div className="play" /></button>
                <button>NEXT</button>
            </div>
        );
    }
}
