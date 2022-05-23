import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { blue, pink } from '@mui/material/colors';
import './Footer.css'

import { NavLink } from 'react-router-dom';
import logo from '../../Image/logo.png'

const Footer = () => {



    return (
        <>
            <div className='footer'>

                <div className='footer backgrouundStyle p-4 '>
                    <div className="container ">
                        <div className="row mb-5 row-cols-md-2 row-cols-lg-3 row-cols-1">
                            <div className="col " >
                                <img src={logo} alt="" style={{ height: '50px' }} />

                                <h1>About Company</h1>
                                <p>A company can be created as a legal person so that the company itself has limited liability as members perform or fail to discharge their duty according to the publicly declared incorporation, or published policy.</p>

                                <FacebookOutlinedIcon sx={{ fontSize: 35, color: blue[800] }} />

                                <InstagramIcon sx={{ fontSize: 35, color: pink[800] }} />

                                <LinkedInIcon sx={{ fontSize: 35, color: blue[800] }} />
                            </div>
                            <div className="col" >
                                <h1>Useful Links</h1>


                                <div >
                                    <NavLink to="/home">Home</NavLink>
                                </div>

                                <div>
                                    <NavLink to="/about">About</NavLink>
                                </div>

                                <div>
                                    <NavLink to="/allbooking">All Bookings</NavLink>
                                </div>

                                <div>
                                    <NavLink to="/place">AddPlace</NavLink>
                                </div>

                            </div>
                            <div className="col">
                                <h1>Contact Us</h1>
                                <div>
                                    <div className='d-flex justify-content-start'>
                                        <PhoneIcon sx={{ fontSize: 35 }} />
                                        <p>+8801000000001</p>
                                    </div>

                                    <div className='d-flex justify-content-start'>
                                        <EmailIcon sx={{ fontSize: 35 }} />
                                        <p>CoronaCorner@gmail.com</p>
                                    </div>

                                    <div className='d-flex justify-content-start'>
                                        <AddLocationIcon sx={{ fontSize: 35 }} />
                                        <p>Tejgaon, Dhaka</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className='mb-2 d-flex justify-content-center'>
                        <small>© Shahariar 2022. All Rights Reserved</small>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Footer;