import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Sales from './components/Sales'
import WhyUs from './components/WhyUs'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Roadmap from './components/Roadmap'

const index = () => {

  return (
    <>
      <div id="hero">
        <Hero />
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
    </>
  )
}

export default index