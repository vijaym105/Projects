import React from 'react'
import "./dock.scss"
import Spotify from './Apps/Spotify'

const Dock = ({windowState ,  setWindowState}) => {
  
  return (
    <footer className='dock'>
        <div onClick={()=> {setWindowState(state =>({...state , github:true}))}} className="icon git"><img src="/doc-icon/github.svg" alt="" /></div>
        
        <div onClick={()=>{setWindowState(state =>({...state, calender:true}))}} className="icon calender"><img src="/doc-icon/calender.svg" alt=""/></div>
        <div onClick={()=> {setWindowState(state =>({...state , pdf:true}))}} className="icon pdf"><img src="/doc-icon/pdf.svg" alt=""/></div>
        <div onClick={()=> {setWindowState(state =>({...state , note:true}))}} className="icon note"><img src="/doc-icon/note.svg" alt=""/></div>
        <div onClick={()=> {setWindowState(state =>({...state , spotify:true}))}} className="icon spotify"><img src="/doc-icon/spotify.svg" alt=""/></div>
        <div onClick={()=> {window.open("mailto:punekarvijay10@example.com")}} className="icon mail"><img src="/doc-icon/mail.svg" alt=""/></div>
        <div onClick={()=> {setWindowState(state =>({...state , cli:true}))}} className="icon cli"><img src="/doc-icon/cli.svg" alt=""/></div>
        <div onClick={()=>{window.open("https://www.linkedin.com/in/vijay-malusare-40883a384/",'_blank')}}  className="icon link"><img src="/doc-icon/link.svg" alt=""/></div>
        
    </footer>
  )
}

export default Dock