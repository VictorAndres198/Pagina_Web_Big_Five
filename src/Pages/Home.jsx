import React from 'react';
import '../styles.css';
import MeteorShower from '../Components/MeteorShower';
import SolarSystem from '../Components/SolarSystem';
import Background from '../Components/Background';
import { Fragment } from 'react';
import Button from '../Components/Button';

function Home() {
  return (
    <Fragment>  
    <div className='home-body'>
            <section>
                <div className='centered-column'>
                  <h1>Test Big Five</h1>
                    <Button to='BigFiveTest' text='Iniciar el Test'/>
                </div>
              
                <div className='animation-container'> 
                  <MeteorShower/>
                  <SolarSystem/>
                </div>                
            </section>  
    </div>
    <Background/>
    </Fragment>
  );
}

export default Home;