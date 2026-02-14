import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Pages/Home'

const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default App
