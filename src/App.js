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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLinks = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  const closeLinks = () => {
    setIsSidebarOpen(false)
  }

  function handleScroll(e) {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    const elem = document.getElementById(id)
    const pos = elem.offsetTop
    if (isSidebarOpen) {
      closeLinks()
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: pos - 60,
          behavior: 'smooth'
        })

      }, 500)
    } else {
      window.scrollTo({
        top: pos - 60,
        left: 0,
        behavior: 'smooth'
      })
    }

  }

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar handleScroll={handleScroll} handleLinks={handleLinks} closeLinks={closeLinks} isSidebarOpen={isSidebarOpen} />
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