import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import MeteorShower from '../Components/MeteorShower';

function Home() {
  return (
    <div>
        <section className='centered-column maintest'>
            <h1>Test Big Five</h1>
             <Link to="/BigFiveTest"  className="btn btn-outline-secondary btn-lg btn-block mainButton">
              Iniciar el Test
            </Link>
            <MeteorShower/>
        </section>  
    </div>
  );
}

export default Home;