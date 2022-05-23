import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import aboutImg from '../Image/about.jpg'

const About = () => {
    return (
        <>
            <div className=' d-flex justify-content-center backgrouundStyle1 p-5'>

                <Card sx={{ display: 'flex' }} className="w-50 p-3 ">
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }} className="d-flex align-items-center">
                            <div>
                                <Typography component="div" variant="h5">
                                    About
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" >
                                    Our Mission is Clear
                                    Quite simply, to deliver the most trusted, comprehensive, and detailed view of the digital world, so our customers can outperform their competition and win their markets.
                                </Typography>
                            </div>
                        </CardContent>

                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 500, height: 500 }}
                        image={aboutImg}
                        alt="Live from space album cover"
                    />
                </Card>
            </div>
        </>
    );
};

export default About;