import React from 'react'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import Picture from './components/picture'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
<Home/>
      <Routes>
<Route path='/'element={<Form/>}></Route>
<Route path='/signup'element={<Signup/>}></Route>
<Route path='/Login'element={<Login/>}></Route>
{/* <Route path='/Picture'element={<Picture/>}></Route> */}

      </Routes>
      {/* <Home/>
      <Form/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
