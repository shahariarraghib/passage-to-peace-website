import React from 'react';
import About from '../About/About';
import Slide from '../Shared/Slide/Slide';
import PlaceData from './PlaceData/PlaceData';



const Home = () => {
    return (
        <div>

            <Slide></Slide>
            <About></About>
            <PlaceData></PlaceData>

        </div>
    );
};

export default Home;