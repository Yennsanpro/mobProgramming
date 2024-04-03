import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signup } from '../../services/authServices'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstname, setFirtsname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

const handleSignup = async () => {
    const res =await signup ({email, name: {firstname, lastname}, username, password})
    localStorage.seItem('token', res.token)
    localStorage.seItem('role', res.role)
    navigate('/home')
}


  return (
    <div className='main'>
        <Card sx={{width: '25vw'}}>
            <CardHeader title='Sing Up'>
                <Typography variant='h3'> Sign up </Typography>
            </CardHeader>
            <CardContent sx={{display: 'flex', flexDirection:'column', gap: '1em'}}>
            <TextField type='text' variant='outlined' label='First Name' onChange={(e) => setFirtsname(e.target.value)}></TextField>
            <TextField type='text' variant='outlined' label='Lastname' onChange={(e) => setLastname(e.target.value)}></TextField>
            <TextField type='text' variant='outlined' label='Email' onChange={(e) => setEmail(e.target.value)}></TextField>
            <TextField type='text' variant='outlined' label='Username' onChange={(e) => setUsername(e.target.value)}></TextField>
            <TextField type='text' variant='outlined' label='Password' onChange={(e) => setPassword(e.target.value)}></TextField>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'end'}}>
                <Button>Cancel</Button>
                <Button variant='contained' onClick={() => handleSignup()}> Sign up </Button>

            </CardActions>
        </Card>
      
    </div>
  )
}

export default Signup
