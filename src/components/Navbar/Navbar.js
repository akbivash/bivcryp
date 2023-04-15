import React, { useState } from 'react'
import './Navbar.css'

import { FaTimes } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'


import { GoThreeBars } from 'react-icons/go'
import { li } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handlelis = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  const closelis = () => {
    setIsSidebarOpen(false)
  }


  return (
    <>
      <nav >
<div className="nav_wrapper">
  
<div className="navbar_left">
          <li to='/' className="logo" onClick={closelis}>Biv<span>Cryp</span></li>
          <ul className="lis">
            <li >About</li>
            <li>Sales</li>
            <li>Roadmap</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Why Us</li>
          </ul>
        </div>


        <div className='navbar_right'>

          <li className='bars' onClick={handlelis}>{isSidebarOpen ? <FaTimes /> : <GoThreeBars />}</li>
          <li className='buy'>Buy Now</li>
          <li className="lang">
            EN <FiChevronDown />
          </li>
        </div>
</div>


      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} />
<div className={`${isSidebarOpen ? "blur active": "blur"}`}></div>

    </>
  )
}

export default Navbar