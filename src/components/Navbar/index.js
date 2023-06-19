import React, { useState } from 'react'
import './navbar.css'
import { FaTimes } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { GoThreeBars } from 'react-icons/go'
import Sidebar from '../Sidebar'
import { navLinks } from '../../assets/data'
import { handleScroll } from '../../utils/handleScroll'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const handleScrollProps = {
    isSidebarOpen,
    setIsSidebarOpen
  }
  const { scrollToTop, handleLinks, closeLinks } = handleScroll(handleScrollProps)



  return (
    <>
      <nav >
        <div className="nav_wrapper">
          <div className="navbar_left">
            <a to='/' className="logo" onClick={() => {
              closeLinks()
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }}>Biv<span>Cryp</span></a>
            <ul className="links">
              {navLinks.map(link => {
                return <a href={link.link} key={link.link} onClick={scrollToTop}>{link.title}</a>
              })}
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

      <Sidebar props={handleScrollProps} />
      <div className={`${isSidebarOpen ? "blur active" : "blur"}`}></div>

    </>
  )
}

export default Navbar