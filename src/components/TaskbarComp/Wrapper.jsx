import React, { Children } from 'react'
import { Rnd } from "react-rnd";
import "./wrap.scss"
import Github from '../Apps/Github';


const Wrapper = ({children}) => {
  return (
    <Rnd
    default={{
        width:"40vw",height:"60vh", x:200, y:100
    }}>
        <div className="wrap">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="meta-data">
                    <p>--sh ver</p>
                </div>
            </div>
            <div className="content">
               {children}
            </div>
        </div>
    </Rnd>
  )
}

export default Wrapper