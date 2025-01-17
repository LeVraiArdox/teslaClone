import React from "react";
import "../App.css";

const Hero1 = () => {
    return (
        <div className="hero1">
            <div className="flex-col">
                <div className="hero1-text">
                    <h1 className="hero1-title">Model Y</h1>
                    <h3 className="hero1-subtitle">Disponible à partir de 299 € par mois1 ou 40 990 €</h3>
                </div>
                <div className="buttons flex-col">
                    <div className="flex-control">
                        <button className="button1">Commander</button>
                        <button className="button2">Essais</button>
                    </div>
                    <p className="liltext">Véhicules disponibles</p>
                </div>
            </div>
        </div>
    );
}

export default Hero1;