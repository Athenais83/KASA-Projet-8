import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Home (){
    return(
        <body>
            <Header />
            <Menu />
            <Banner />
            <Footer /> 
        </body>
            
    )
}

export default Home;