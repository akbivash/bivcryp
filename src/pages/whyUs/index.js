import React from 'react'
import './style.css'
import {FaMobileAlt} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'
import {CiWallet} from 'react-icons/ci'
import {FcDataProtection} from 'react-icons/fc'
const index = () => {
  return (
    <div className='why_us'>
<div className="heading">
WHY CHOOSE OUR TOKEN
</div>
<section>
  <div className="item">
    <i><FaMobileAlt/></i>
    <h2>Mobile payment make easy</h2>
    <span>You can use a mobile device to pay with simple steps</span>

  </div>
  <div className="item">
    <i><CiWallet/></i>
    <h2>Lifetime free transaction</h2>
    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>

  </div>
  <div className="item">
    <i><FcDataProtection/></i>
    <h2>Protect the identity</h2>
<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui.</span>
  </div>
  <div className="item">
    <i><MdSecurity/></i>
    <h2>Security & control over money</h2>
<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, distinctio.</span>
  </div>
  </section>
    </div>
  )
}

export default index