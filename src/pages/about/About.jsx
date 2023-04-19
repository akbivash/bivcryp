import React from 'react'
import { FiUsers } from 'react-icons/fi'
import {AiOutlineGlobal, AiOutlineStar} from 'react-icons/ai'
import './about.css'
const About = () => {
  return (
    <div className='about'>
      <section className="section_1">
       <h2 className="heading">
       what is bivcryp
       </h2>
       <h1>We’ve built a platform to buy and sell shares.</h1>
       <div className="widgets">
        
        <div className="item">
        <span className="icon">
        <i><FiUsers/></i>
        </span>
        <div className="details">
          <h3>Decentralized Platform</h3>
          <p>The platform helps investors to make easy to purchase and sell their tokens</p>
        </div>
        </div>

        <div className="item">
        <span className="icon">
       <i> <AiOutlineGlobal/></i>
        </span>
        <div className="details">
          <h3>Crowd Wisdom</h3>
          <p>The process of taking into account the collective opinion of a group</p>
        </div>
        </div>

        <div className="item">
        <span className="icon">
       <i> <AiOutlineStar/></i>
        </span>
        <div className="details">
          <h3>Rewards Mechanism</h3>
          <p>The system pay a bonus for excellent individuals</p>
        </div>
        </div>

       </div>
      </section>
      <section className="section_2">
<img src="https://demo.ovatheme.com/cryptlight/wp-content/uploads/2021/08/ilustrator.png" alt="" />
      </section>
    </div>
  )
}

export default About