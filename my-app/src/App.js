import React from 'react';
import './components/Header';
import './components/Banner';
import './components/Menu.jsx'
import './pages/AppRouter';
import './index.js'

import Header from './components/Header'
import Banner from './components/Banner'
import Menu from './components/Menu.jsx'

function App() {
    return (
    <>
    <div>
    <Header/>
    <Menu />
    </div>
    <div>
        <Banner/>
        </div>
    </>
    )
}

export default App


