import React from 'react';
import Navbar from './Navbar';
import './styles.css';

function App(){
    return (
        <div>            
            <Navbar />
            <section className='centered-column'>
                <h1 className='mt-3'>Test Big Five</h1>
                <button className="btn btn-outline-secondary btn-lg btn-block">Iniciar el Test</button>       
            </section>            
        </div>
    )
}

/*
PascalCase: Los componentes en React tienen que ser Pascal Case
camelCase
snake_case
kebab-case
*/

export {App};