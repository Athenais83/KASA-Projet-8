import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

function Home (){
    return(
        <body>
            <Header />
            <Banner />
            <Gallery />
            <Footer /> 
        </body>
    )
}

export default Home;