import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

import { FaTimes } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import {  Toplinks } from './LinksContainer'
import { MainLinksContainer } from './LinksContainer'
import { NavIcons } from './LinksContainer'

import { HiOutlineUserCircle, HiSearch } from 'react-icons/hi'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { social } from '../../data'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showLink, setShowLink] = useState(false)
  const [showInputBox, setShowInputBox] = useState(false)
  const [input, setInput] = useState('')

const handleLinks = () => {
setShowLink(!showLink)
}

  const clearInput = (e) => {
    setInput((e) => e.target.value = '')

  }

  const handleInput = (e) => {
    setInput(e)
  }
const closeLinks = () => {
  setShowLink(false)
}


  return (

  <div>
      <nav >
      <div className= 'navbar' >

        <div className="navbar_left">
          <Link to='/' className="logo" onClick={closeLinks}>Biv<span>Cryp</span></Link>
        </div>

        <div className="navbar_center">
        {showLink && <MainLinksContainer/>}
          </div>
        

        <div className='navbar_right'>
          <Toplinks />
          <ul className="icons">
  <li className='user'> {<HiOutlineUserCircle/>}</li> 
   <li className='wallet'>{<MdAccountBalanceWallet/>}</li>
   <li className='bars'  onClick={handleLinks}>{showLink ? <FaTimes/> : <GoThreeBars/>}</li>
 </ul>
        </div>
      </div>
     
    </nav>

  </div>
    
  )
}

export default Navbar