import { AppBar, Box, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { hover } from '@testing-library/user-event/dist/hover';


import { red } from '@mui/material/colors';


const Header = () => {

    const color = red[500];


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { user, logOut } = useAuth();
    return (
        <>
            {/* <div>


                <Navbar bg="dark" variant="dark">

                    <Container >
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>


                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>

                        <NavLink to="/mybooking">MyBooking</NavLink>
                        <NavLink to="/allbooking">AllBooking</NavLink>
                        <NavLink to="/place">AddPlace</NavLink>



                        <Navbar.Text>
                            {
                                user?.email && <span className='mt-1' style={{ color: 'white' }}>Hello {user.displayName}</span>
                            }
                        </Navbar.Text>



                        {
                            user.email ?
                                <div className='d-flex justify-content-center'>
                                    <div> <Button onClick={logOut} color="error" variant="contained">Log Out</Button></div>
                                    <div>
                                        <img src={user.photoURL} className='rounded-circle border border-1 login-img-style ' alt="" />
                                    </div>
                                </div>
                                :
                                <NavLink to="/login">Log in</NavLink >
                        }

                    </Container>


                </Navbar>



            </div> */}



            <AppBar position="static" sx={{ backgroundColor: "#242F9B" }}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        {/* <img src={logo} alt="" style={{ height: '50px', weith: '200px', margin: '10px', marginRight: '50px' }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PASSAGE TO PEACE
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">

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
                                        </Typography>
                                    </MenuItem>
                                }
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />  */}

                        <Typography
                            variant="h5"
                            noWrap
                            component=""
                            href=""

                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PASSAGE TO PEACE

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>

                            {
                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', padding: '1px', backgroundColor: "white", margin: '20px' }}
                                >
                                    <NavLink to="/home" >Home</NavLink>

                                </Button>

                            }
                            {
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', padding: '5px', color: 'text.primary', backgroundColor: "white", margin: '20px' }}
                                >
                                    <NavLink to="/about">About</NavLink>
                                </Button>
                            }
                            {
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', padding: '5px', color: 'text.primary', backgroundColor: "white", margin: '20px' }}
                                >
                                    <NavLink to="/mybooking">MyBooking</NavLink>
                                </Button>
                            }
                            {
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', padding: '5px', color: 'text.primary', backgroundColor: "white", margin: '20px' }}
                                >
                                    <NavLink to="/allbooking">AllBooking</NavLink>
                                </Button>
                            }
                            {
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', padding: '5px', color: 'text.primary', backgroundColor: "white", margin: '20px' }}
                                >
                                    <NavLink to="/place">AddPlace</NavLink>
                                </Button>
                            }

                            <div className='d-flex justify-content-end'>
                                <Navbar.Text className='d-flex align-items-center'>
                                    {
                                        user?.email && <span className='mt-1' style={{ color: 'white' }}>Hello {user.displayName}</span>
                                    }
                                </Navbar.Text>
                            </div>


                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Profile">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">

                                            {
                                                user.email ?

                                                    <>
                                                        <div>
                                                            <NavLink to="/mybooking" >My Bookings</NavLink>
                                                        </div>

                                                        <div>
                                                            <Button onClick={logOut} color="error" variant="contained">Log Out</Button>
                                                        </div>
                                                    </> :

                                                    <>

                                                        <NavLink to="/login"><Button onClick={logOut} color="success" variant="contained">Log In</Button></NavLink ></>
                                            }

                                        </Typography>
                                    </MenuItem>
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>



        </>
    );

};


export default Header;