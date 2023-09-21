import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home'; 
import Test from './Components/Test';

function AppRouter() {
  return (
    <Router>
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
        {/* Agrega más rutas según sea necesario */}
    </Router>
  );
}

export default AppRouter;