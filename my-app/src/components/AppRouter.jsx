import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import CardInfo from '../pages/CardInfo'
import Error from '../pages/Error'

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route exact path="Home" element={Home />}/>
                <Route path="about" element={About />}/>
                <Route path="card" element={CardInfo />}/>
                <Route path="*" element={Error />}/>
            </Routes>
        </Router>
)
}

export default AppRouter