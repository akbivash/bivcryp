import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Homepage from './pages/Homepage'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="app_main">
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App