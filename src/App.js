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
import Faq from './pages/faq/Faq'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="app_main">
            <div id="homepage">
              <Homepage />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="sales">
              <Sales />
            </div>
            <div id="why_us">
              <WhyUs />
            </div>
            <div id="roadmap">
              <Roadmap />
            </div>
            <div id="faq">
              <Faq />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App