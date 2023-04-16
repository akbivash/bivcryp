import React from 'react'
import { navLinks } from '../../data'

const Sidebar = ({isSidebarOpen, handleScroll, closeLinks}) => {
  return (
    <div className={`${isSidebarOpen ? 'sidebar active' :'sidebar'}`}>
 <ul className="links">
          {navLinks.map(link => {
            return <a href={link.link} key={link.link} onClick={handleScroll}>{link.title}</a>
          })}
          </ul>
    </div>
  )
}

export default Sidebar