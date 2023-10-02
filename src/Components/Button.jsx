import React from "react";
import './button.css';
import { Link } from "react-router-dom";
import star from './Images/star.svg';
import star2 from './Images/star2.svg';
import star3 from './Images/star3.svg';


function Button({to,text,onClick}){
    return(
            <Link to={to}>
                <button className='main-button' onClick={onClick}>
                    <span className='text-button'>{text}</span>
                    <img src={star} alt="" className="buttonstar" />
                    <img src={star2} alt="" className="buttonstar2" />
                    <img src={star3} alt="" className="buttonstar3" />
                    <img src={star} alt="" className="buttonstar4" />                    
                </button>                
            </Link>    
    );
};

export default Button;