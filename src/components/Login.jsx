import React from 'react'
import {Button, TextField } from '@mui/material'


const Login = () => {
  return (
    <div style={{marginLeft:'40%'}}>
            <div>
      <TextField variant='outlined'color='secondary' label='Username'></TextField>
      </div><br></br>
      <div>
      <TextField variant='outlined'color='secondary' label='Password'></TextField>
      </div><br></br>
      <Button variant='contained' color="primary">Register</Button>

    </div>
  )
}

export default Login
