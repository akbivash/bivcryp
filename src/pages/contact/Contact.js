import React from 'react'
import './contact.css'
import {BiMessageDots} from 'react-icons/bi'
import { AiOutlinePhone } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
const Contact = () => {
  return (
    <div className='contact'> 
<div className="heading">
    <span>CONTACT</span>
    <h1>Contact BivCryp</h1>
</div>
<div className="info">
    <span><i>< BiMessageDots/></i> info@bivcryp.com</span>
    <span><i>< AiOutlinePhone/></i> +977 9807543210</span>
    <span><i>< FiSend/></i> Join us on Telegram</span>
</div>
<form action="">
    <div className="field">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
    </div>
    <div className="field">
        <input type="email" placeholder='Email' />
        <input type="number" placeholder='Number' />
    </div>
    <div className="field">
        <textarea   cols="30" rows="10" placeholder='Message...' ></textarea>
    </div>
    <button>Submit your message</button>
</form>
    </div>
  )
}

export default Contact