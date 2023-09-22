import React from 'react'
import './styles.css'
import {Route,Routes} from 'react-router-dom'

import Home from './Components/Home'; 
import Test from './Components/Test';
import Navbar from './Navbar';

function App(){
    return (
        <div>  
            <Navbar/>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Test' element={<Test/>}/>
            </Routes>   
        </div>
    )
}

export {App};