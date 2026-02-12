import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/Apps/Github'
import Note from './components/Apps/Note'
import Pdf from './components/Apps/Pdf'
import Spotify from './components/Apps/Spotify'
import Terminal from './components/Apps/CLI'
import CLI from './components/Apps/CLI'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    pdf: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Navbar />
      <Dock windowState={windowState} setWindowState= {setWindowState} />
      {windowState.github && <Github windowName="github" setWindowState ={setWindowState}/>}
      {windowState.note &&<Note windowName="note" setWindowState ={setWindowState}/>}
      {windowState.pdf && <Pdf windowName="pdf" setWindowState ={setWindowState}/>}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState ={setWindowState}/>}
      {windowState.cli && <CLI windowName="cli" setWindowState ={setWindowState}/>}
    </main>
  )
}

export default App