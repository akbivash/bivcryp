import React, { useEffect, useRef } from 'react'
import { navLinks, mainLinks } from '../../data'
import './LinksContainer.css'
import { social } from '../../data'





export const Toplinks = () => {

    return (
        <div className="toplinks">
            <ul className="links">
                {navLinks.map((link) => {
                    const { id, text, url } = link;
                    return <li key={id}>{text}</li>
                })}
            </ul>


        </div>
    )
}

export const MainLinksContainer = () => {
   
    return (
        <div className='mainlinks_container'  >
            <ul className="links" >
                {mainLinks.map((link) => {
                    const { id, text, url, icon, icon2 } = link;
                    return <li key={id}>
                        <span><i>{icon}</i>{text}</span> <i>{icon2}</i>
                    </li>
                })}
            </ul>

            <div className="connect_wallet">Connect wallet</div>
            <ul className="social_links">
                {social.map((link) => {
                    const { id, icon } = link;
                    return <li key={id}>{icon}</li>
                })}
            </ul>
        </div>
    )
}


