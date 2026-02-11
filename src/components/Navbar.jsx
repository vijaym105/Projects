import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="left">
            <div className="apple-icon">
                <img src="./nav-icons/apple.svg" alt="" />
            </div>
            <div className="user">
                <p>Vijay Malusare</p>
            </div>
            <div className="file">
                <p>File</p>
            </div>
            <div className="window">
                <p>Window</p>
            </div>
            <div className="terminal">
                <p>Terminal</p>
            </div>
        </div>

        <div className="right">
        <div className="wifi-icon">
            <img src="./nav-icons/wifi.svg" alt="" />
        </div>
        <div className="items">
            <DateTime />
        </div>
        </div>

    </div>
  )
}

export default Navbar