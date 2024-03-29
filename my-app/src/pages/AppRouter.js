import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import CardInfo from '../pages/CardInfo'
import Error from '../pages/Error'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const AppRouter = () =>{
    return(
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/CardInfo/:id" element={<CardInfo />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </Router>
        </div>
    )
}
export default AppRouter