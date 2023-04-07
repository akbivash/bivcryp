import React, { useState } from 'react'
import './Navbar.css'

import { FaTimes } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'


import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLinks = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  const closeLinks = () => {
    setIsSidebarOpen(false)
  }


  return (
    <>
      <nav >
<div className="nav_wrapper">
  
<div className="navbar_left">
          <Link to='/' className="logo" onClick={closeLinks}>Biv<span>Cryp</span></Link>
          <ul className="links">
            <Link>About</Link>
            <Link>Sales</Link>
            <Link>Roadmap</Link>
            <Link>Team</Link>
            <Link>Contact</Link>
          </ul>
        </div>


        <div className='navbar_right'>

          <li className='bars' onClick={handleLinks}>{isSidebarOpen ? <FaTimes /> : <GoThreeBars />}</li>
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