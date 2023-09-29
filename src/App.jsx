import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Home from './Pages/Home'; 
import BigFiveTest from './Pages/TestBF/BigFiveTest';
import TestResultado from './Pages/TestBF/TestResultado';

import Navbar from './Components/Navbar';

function App(){
    return (
        <div>  
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/BigFiveTest' element={<BigFiveTest/>}/>
                <Route path='/TestResultado' element={<TestResultado/>}/> 
            </Routes>   
        </div>
    )
}

export {App};