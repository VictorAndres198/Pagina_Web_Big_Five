import React from "react";
import './solarsystem.css';

function SolarSystem(){
    return (       
        <div className="sun">
        <div className="mercury-outline">
            <div className="mercury">
                <p className="planets-p">Mercurio</p>
            </div>
        </div>
        <div className="venus-outline-1">
            <div className="venus">
                <p className="planets-p">Venus</p>
            </div>
        </div>
        <div className="earth-outline-1">
            <div className="earth">
                <div className="earth-circle">
                    <div className="earth-inner"></div>
                </div>
                    <p className="planets-p">Tierra</p>
            </div>
        </div>
        <div className="mars-outline-1">
            <div className="mars">
                <p className="planets-p">Marte</p>
            </div>
        </div>
        <div className="jupiter-outline-1">
            <div className="jupiter">
                <p className="planets-p">Jupiter</p>
            </div>
        </div>
        <div className="saturn-outline-1">
            <div className="saturn">
                <p className="planets-p">Saturno</p>
            </div>
        </div>
        <div className="uranus-outline-1">
            <div className="uranus">
                <p className="planets-p">Urano</p>
            </div>
        </div>
        <div className="neptune-outline-1">
            <div className="neptune">
                <p className="planets-p">Neptuno</p>
            </div>
        </div>
        </div>
    );    
};
export default SolarSystem;