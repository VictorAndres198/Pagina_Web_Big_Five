import React from 'react'
import './styles.css'
import {Route,Routes} from 'react-router-dom'

import Home from './Components/Home'; 
import BigFiveTest from './Components/TestBF/BigFiveTest';
import TestResultado from './Components/TestBF/TestResultado';

import Navbar from './Navbar';

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