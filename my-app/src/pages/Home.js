import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

function Home (){
    return(
        <body>
            <Header />
            <Banner imageUrl="/assets/source1.png" text="Chez vous, partout et ailleurs"/>
            <Gallery />
            <Footer /> 
        </body>
    )
}

export default Home;