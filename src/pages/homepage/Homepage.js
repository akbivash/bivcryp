import React, { useEffect, useRef, useState } from 'react'
import './homepage.css'

const Homepage = () => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef()



  useEffect(() => {



    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  function handleScroll(e) {
    let rect = ref.current.getBoundingClientRect()
    if (rect.top - window.innerHeight < 0) {
      setIsInView(true)
    }
  }


  return (

    <div className="homepage">

      <div className="section_1">
        <h2>The World’s <span>1st ICO</span> Platform That Offers Rewards</h2>
        <span>The platform helps investors to make easy to purchase and sell their tokens</span>
        <img src="https://demo.ovatheme.com/cryptlight/wp-content/uploads/2021/08/ilus-bner.png" alt="" />
      </div>

      <div className="section_2">
        <div className="top">
          <span>Pre-sale is live now</span>

          <div className='timer'>

            <div>
              <span>24</span>
              <span >Days</span>
            </div>
            <div>
              <span>24</span>
              <span>Hours</span>
            </div>
            <div>
              <span>24</span>
              <span>Minutes</span>
            </div>
            <div>
              <span>24</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
        <div className='bottom'>

          <span className='heading'>Pre Sale</span>
          <div className='progress_bar'>
            <span className={`${isInView ? ' bar active' : ' bar'}`} ref={ref}></span>
            <div>
              <span>Pre Sale</span>
              <span>Pre Sale</span>
              <span>Pre Sale</span>
            </div>
          </div>
        </div>
        <button className='purchase_btn'>Purchase tokens</button>

      </div>
    </div>

  )
}

export default Homepage