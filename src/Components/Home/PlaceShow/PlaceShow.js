import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';



const PlaceShow = ({ PlaceData }) => {
    const { _id, name, price, description, img } = PlaceData;


    return (

        <>

            <div >


                <Card sx={{ maxWidth: 550, height: 500 }} className="shadow p-3 mb-5 bg-body rounded">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='fw-bolder' >
                                {name}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="div" className='text-danger'>
                                <span className='fs-2'>$</span>{price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >

                        <div >
                            <Tooltip title="Add" >
                                <a href={`/booking/${_id}`}>
                                    <Button size="small" color="success" variant="contained" >
                                        Booking
                                    </Button>
                                </a>
                            </Tooltip>
                        </div>

                    </CardActions>
                </Card>

            </div>
        </>
    );
};

export default PlaceShow;