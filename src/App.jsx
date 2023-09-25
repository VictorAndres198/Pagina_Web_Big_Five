import React from 'react'
import './styles.css'
import {Route,Routes} from 'react-router-dom'

import Home from './Components/Home'; 
import Test from './Components/Test';
import BigFiveTest from './Components/TestBF/BigFiveTest';

import Navbar from './Navbar';

function App(){
    return (
        <div>  
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Test' element={<Test/>}/>
                <Route path='/BigFiveTest' element={<BigFiveTest/>}/>
            </Routes>   
        </div>
    )
}

export {App};