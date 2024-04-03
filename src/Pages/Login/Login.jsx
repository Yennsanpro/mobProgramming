import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { login } from '../../services/authServices'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const res = await login({ email, password })
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        navigate('/home')
    }


    return (
        <div className='main'>
            <Card sx={{ width: '25vw' }}>
                <CardHeader title='login'>
                    <Typography variant='h3'> Login </Typography>
                </CardHeader>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <TextField type='text' variant='outlined' label='Email' onChange={(e) => setEmail(e.target.value)} />
                    <TextField type='text' variant='outlined' label='Password' onChange={(e) => setPassword(e.target.value)} />
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button>Cancel</Button>
                    <Button variant='contained' onClick={() => { handleLogin() }}> Login </Button>

                </CardActions>
            </Card>

        </div>
    )
}

export default Login
