import {Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const [my_myname,setName]=useState('Maya')//maya is recorded in first variable
    const [count,setCount]=useState(0)

    function changeName(){
        setName('rekha')
    }
    function counter() {
        setCount(count+1)
    }
  return (
    <div style={{marginTop:'5%',marginLeft:'40%'}}>
        <h4>Welcome {my_myname} to reactjs programming</h4>
        <div>
      <TextField variant='outlined'color='secondary' label='FirstName'></TextField>
      </div><br></br>
      <div>
      <TextField variant='outlined'color='secondary' label='Email'></TextField>
      </div><br></br>
      <div>
      <TextField variant='outlined'color='secondary' label='Password'></TextField>
      </div><br></br>
      <div>
      <TextField variant='outlined'color='secondary' label='Phone'></TextField>
      </div><br></br>
      <div>
      <Button variant='contained' color="primary" onClick={changeName}>Register</Button>
      </div><br></br>
      <div>
      <Button variant='contained' color="primary" onClick={counter}>count</Button>
      <p>The count button was clicked {count} times</p>
      </div>

    </div>
  )
}

export default Signup
