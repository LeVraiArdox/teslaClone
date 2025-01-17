import React from "react";
import "../App.css";

const Hero2 = () => {
    return (
        <div className="hero2">
            <div className="flex-col">
                <div className="hero1-text">
                    <h1 className="hero1-title">Model 3</h1>
                    <h3 className="hero1-subtitle">À partir de 39 990 € </h3>
                </div>
                <div className="buttons flex-col">
                    <div className="flex-control">
                        <button className="button1">Commander</button>
                        <button className="button2">Essais</button>
                    </div>
                    <p className="liltext">En savoir plus sur Tesla for Business</p>
                </div>
            </div>
        </div>
    );
}

export default Hero2;