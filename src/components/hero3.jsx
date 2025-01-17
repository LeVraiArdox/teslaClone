import React from "react";
import "../App.css";

const Hero3 = () => {
    return (
        <div className="hero3">
            <div className="flex-col">
                <div className="hero1-text">
                    <h1 className="hero1-title">Model S</h1>
                    <h3 className="hero1-subtitle">À partir de 92 990 €</h3>
                </div>
                <div className="buttons flex-col">
                    <div className="flex-control">
                        <button className="button1">Commander</button>
                        <button className="button2">Essais</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero3;