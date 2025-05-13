import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bakery
        </Typography>
       <Link to={'/Signup'}> <Button style={{color:'white'}}>Signup</Button></Link>
       <Link to={'/'}> <Button  style={{color:'white'}} >Home</Button></Link>
       <Link to={'/Login'}> <Button  style={{color:'white'}} >Login</Button></Link>
       <Link to={'/Picture'}> <Button  style={{color:'white'}} >Picture</Button></Link>

        {/* <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button> */}




      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Home
