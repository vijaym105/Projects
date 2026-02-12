import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/Apps/Github'
import Note from './components/Apps/Note'
import Pdf from './components/Apps/Pdf'
import Spotify from './components/Apps/Spotify'
import Terminal from './components/Apps/CLI'
import CLI from './components/Apps/CLI'


const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github />
      <Note />
      <Pdf />
      <Spotify />
      <CLI />
    </main>
  )
}

export default App