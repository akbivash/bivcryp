import React, { useEffect, useRef, useState } from 'react'
import './homepage.css'

const Homepage = () => {
  const [isInView, setIsInView] = useState(false)
  const [time, setTime] = useState({
    days: '',
    minutes: '',
    hours: '',
    seconds: ''
  })
  const ref = useRef()


  useEffect(() => {
    startTimer();
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getTimeDifference = () => {
  const targetEndTime = new Date("Jul 7, 2023 6:00"); // Target end time

    const currentTime = new Date().getTime(); // Current time in milliseconds
    const difference = targetEndTime - currentTime; // Time difference in milliseconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      const timeDiff = getTimeDifference();
      setTime(timeDiff);
      if (timeDiff.days <= 0 && timeDiff.hours <= 0 && timeDiff.minutes <= 0 && timeDiff.seconds <= 0) {
        clearInterval(intervalId);
        setTime({
          days:0,
          hours:0,
          minutes:0,
          seconds:0
        })
      }
    }, 1000);

   
  };

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
              <span>{time.days}</span>
              <span >Days</span>
            </div>
            <div>
              <span>{time.hours}</span>
              <span>Hours</span>
            </div>
            <div>
              <span>{time.minutes}</span>
              <span>Minutes</span>
            </div>
            <div>
              <span>{time.seconds}</span>
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