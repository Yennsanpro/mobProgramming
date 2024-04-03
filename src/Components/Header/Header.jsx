import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        navigate('/')
    }
    return (
        <Box>

            <AppBar position='static'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={'/home'}>
                        <Typography variant='h2'> Demo </Typography>

                    </Link>

                    <Box sx={{ display: 'flex', gap: '1em' }}>
                        <Link to= {'/home'}>
                            <Typography variant='h6' color='white'>Home</Typography>
                        </Link>
                        <Link to={'/all'}>
                            <Typography variant='h6'>All users</Typography>
                        </Link>
                        <Link to={'/one'}>
                            <Typography variant='h6'>One user</Typography>
                        </Link>
                    </Box>

                    <Box sx={{ width: '20vw' }}>
                        {localStorage.getItem('token') ?
                            <button variant='contained' onClick={() => { handleLogout() }}>Logout</button>
                            :
                            <>
                                <Link to={'/login'}> {/* para que el boton de login te lleve a la pagina de login */}
                                    <Button variant='contained' color='primary'> LOGIN </Button>
                                </Link>
                                <Link to={'/signup'}>
                                    <Button variant='contained' color='primary'> SIGN UP </Button>
                                </Link>
                            </>

                        }
                    </Box>


                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
