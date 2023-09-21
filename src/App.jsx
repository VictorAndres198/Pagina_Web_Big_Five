import React from 'react'
import './styles.css'
import Navbar from './Navbar'
import {Route,Routes} from 'react-router-dom'


const Home = () => <h1>Home</h1>
const Test = () => <h1>Test</h1>

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