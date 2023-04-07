import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({isSidebarOpen}) => {
  return (
    <div className={`${isSidebarOpen ? 'sidebar active' :'sidebar'}`}>
 <ul className="links">
           <Link>About</Link>
           <Link>Sales</Link>
           <Link>Roadmap</Link>
           <Link>Team</Link>
           <Link>Contact</Link>
          </ul>
    </div>
  )
}

export default Sidebar