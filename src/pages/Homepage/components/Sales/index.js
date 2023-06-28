import React from 'react'
import './sales.css'

const Sales = () => {
  return (
    <div className='sales'>
        <div className="heading">
            <h2> ICO Cryptlight Token</h2>
            <h1>ICO Tokens Details & Sale Tokens.</h1>
        </div>
        <section className='section_1'>
<div className="item">
    <h3>Start</h3>
    <span>Aug 5, 2023 (9:00AM GMT)</span>
</div>
<div className="item">
    <h3>End</h3>
    <span>Feb 4, 2023 (9:00AM GMT)</span>
</div>
<div className="item">
    <h3>Acceptable curencies</h3>
    <span>ETH, BTC, LTC</span>
</div>
<div className="item">
    <h3>Number of Tokens for sale</h3>
    <span>100000 Tokens</span>
</div>
<div className="item">
    <h3>Token exchange rate</h3>
    <span>1 ETH = 650 ICC, 1 BTC = 1940 ICC</span>
</div>
<div className="item">
    <h3>Minimal Transaction</h3>
    <span>10 Tokens/ Transaction</span>
</div>
        </section>
    </div>
  )
}

export default Sales