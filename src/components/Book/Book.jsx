import React from "react";
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


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
                <Controller>
                    <Scene
                        triggerHook="onLeave"
                        duration="300%"
                        pin
                    >
                        <Timeline
                            wrapper={<div id="pinContainer" />}
                        >
                            <Tween
                                from={{ x: '0%' }}
                                to={{ x: '-100%' }}
                            >
                                <section className="panel one">
                                    <Hero />
                                    <TOC />
                                    <PageControls />
                                </section>
                            </Tween>
                            <Tween
                                from={{ x: '0%' }}
                                to={{ x: '-100%' }}
                            >
                                <section className="panel two"><span>Panel</span></section>
                            </Tween>
                            <Tween
                                from={{ x: '0%' }}
                                to={{ x: '-100%' }}
                            >
                                <section className="panel three"><span>Panel</span></section>
                            </Tween>
                            <Tween
                                from={{ x: '0%' }}
                                to={{ x: '-100%' }}
                            >
                                <section className="panel four"><span>Panel</span></section>
                            </Tween>
                        </Timeline>
                    </Scene>
                </Controller>
                <PageControls />
            </div>
        );
    }
}
