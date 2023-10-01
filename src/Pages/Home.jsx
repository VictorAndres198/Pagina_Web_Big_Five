import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import MeteorShower from '../Components/MeteorShower';
import SolarSystem from '../Components/SolarSystem';
import Background from '../Components/Background';
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>  
    <div className='home-body'>
            <section>
                <div className='centered-column'>
                  <h1>Test Big Five</h1>
                    <Link to="/BigFiveTest"  className="btn btn-outline-secondary btn-lg btn-block mainButton">
                      Iniciar el Test
                    </Link>
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