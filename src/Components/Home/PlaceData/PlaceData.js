
import { Box, Container, Grid, Paper, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PlaceShow from '../PlaceShow/PlaceShow';


const PlaceData = () => {
    const [placeDatas, setplaceData] = useState([])
    useEffect(() => {
        fetch('https://passage-to-peace-23-05-2022.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setplaceData(data));
    }, [])


    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));
    return (
        <div className='backgrouundStyle2'>
            <Container fixed >
                <h2 className='d-flex justify-content-center pt-4'>Our Packages</h2>
                {/* {
                placeDatas.map(PlaceData => <PlaceShow
                    key={PlaceData._id}
                    PlaceData={PlaceData}
                ></PlaceShow>)
            } */}

                <Box sx={{ flexGrow: 1, padding: 5 }} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 5 }} >
                        {placeDatas.map(PlaceData => (
                            <Grid item xs={6} sm={5} md={2.3} >
                                <PlaceShow
                                    key={PlaceData._id}
                                    PlaceData={PlaceData}
                                ></PlaceShow>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default PlaceData;