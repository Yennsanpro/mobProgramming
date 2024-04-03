import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box>

            <AppBar position='static'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h2'> Demo </Typography>

                    <Box sx={{ display: 'flex', gap: '1em' }}>
                        <Link>
                            <Typography variant='h6' color='white'>Home</Typography>
                        </Link>
                        <Link>
                            <Typography variant='h6'>All users</Typography>
                        </Link>
                        <Link>
                            <Typography variant='h6'>One user</Typography>
                        </Link>
                    </Box>

                    <Box>
                        <Link to={'/login'}>
                            <Button variant='contained' color='primary'> LOGIN </Button>
                        </Link>
                        <Link to={'/signup'}>
                            <Button variant='contained' color='primary'> SIGNUP </Button>
                        </Link>

                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
