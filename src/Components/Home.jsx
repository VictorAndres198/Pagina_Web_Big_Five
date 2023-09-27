import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <section className='centered-column maintest'>
            <h1>Test Big Five</h1>
             <Link to="/BigFiveTest" className="btn btn-outline-secondary btn-lg btn-block">
              Iniciar el Test
            </Link>     
        </section>  
    </div>
  );
}

export default Home;