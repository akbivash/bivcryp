import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/homepage/Homepage'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import About from './pages/about/About'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="app_main">
            <Homepage />
            <About />

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App