import React from 'react';
import Navbar from './Navbar';
import './styles.css';

function App(){
    return (
        <div>            
            <Navbar />            
            <h1 className='centered-text'>Iniciar el Test</h1>
            <button className='centered-button'>Iniciar el Test</button>
        </div>
    )
}

export {App};