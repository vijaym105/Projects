import React from 'react'
// import Dock from './components/Dock'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'

import Github from './components/Apps/Github'
import Note from './components/Apps/Note'
import Pdf from './components/Apps/Pdf'
const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github />
      <Note />
      <Pdf />
    </main>
  )
}

export default App