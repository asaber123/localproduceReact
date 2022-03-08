import * as React from "react";
//import { useHistory } from "react-router-dom";


export function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <div className="black-div">
                    <h1>Your online local food delivery</h1>
                    <p>everything online</p>
                </div>
            </div>
            <div className="home-info">
                <div className="step">
                    <h2>Step 1</h2>
                    <div className="step-img"></div>
                    <p>Text</p>
                </div>
                <div className="step">
                    <h2>Step 2</h2>
                    <div className="step-img"></div>
                    <p>Text</p>
                </div>
                <div className="step">
                    <h2>Step 3</h2>
                    <div className="step-img"></div>
                    <p>Text</p>
                </div>
            </div>
        </div>
    );

}
