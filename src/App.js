import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/homepage/Homepage'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Roadmap from './pages/roadmap/Roadmap'
import WhyUs from './pages/whyUs/index'
import Footer from './components/footer/Footer'
import Sales from './pages/sales/Sales'
import Contact from './pages/contact/Contact'
const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="app_main">
            <Homepage />
            <About />
            <Sales/>
<WhyUs/>
<Roadmap/>
<Contact/>
<Footer/>

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App