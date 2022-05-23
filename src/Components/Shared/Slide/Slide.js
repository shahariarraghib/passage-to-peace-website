import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide from '../../Image/slide-1.jpg'
import slide2 from '../../Image/slide-2.jpg'
import slide3 from '../../Image/slide-3.jpg'
import './Slide.css'

const Slide = () => {
    return (
        <div>
            <Carousel fade >
                <Carousel.Item className='slide-style '>
                    <img
                        className="d-block w-100 "
                        src={slide}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>WellCome To Rangamati</h3>
                        <p>Rangamati is surrounded by natural features like as mountains, rivers, lakes, and waterfalls.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slide-style'>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>WellCome To Rangamati</h3>
                        <p>Rangamati is surrounded by natural features like as mountains, rivers, lakes, and waterfalls</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slide-style'>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>WellCome To Cox's Bazar</h3>
                        <p>longest natural sea beach in the world </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;