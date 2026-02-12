import React from 'react'
import Wrapper from '../TaskbarComp/Wrapper'
import Terminal from 'react-console-emulator'
import './cli.scss'
const CLI = ({windowName ,  setWindowState}) => {
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    portfolio: {
      description: 'Show a short portfolio summary (dummy).',
      usage: 'portfolio',
      fn: () => `Portfolio: Vijay Malusare\n- Role: Frontend developer\n- Highlights: React, Vite, UI\n- More: run \"projects\" or \"resume\"`
    },
    projects: {
      description: 'List sample projects (dummy).',
      usage: 'projects',
      fn: () => 'Projects:\n- Mac-OS Dashboard UI\n- Image Editor Prototype\n- Spotify Widget Integration'
    },
    resume: {
      description: 'Show a short resume pointer (dummy).',
      usage: 'resume',
      fn: () => {
        window.open('./resume.pdf', '_blank')
        return 'Opening in another tab'
      }
    },
    contact: {
      description: 'Show contact info.',
      usage: 'contact',
      fn: () => 'Contact: malusarevijay10@gmail.com '
    },
    'list-commands': {
      description: 'List all available commands.',
      usage: 'list-commands',
      fn: () => Object.keys(commands).join('\n')
    }
  }

  const welcomeMessage = [
    'Welcome to the React terminal!',
    "Type 'list-commands' to see available commands.",
    `Available commands: ${Object.keys(commands).join(', ')}`
  ]

  return (
    <Wrapper windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-app">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'VijayMalusare:-$'}
          promptLabelStyle={{ color: 'rgb(118, 185, 18)' }}
          messageStyle= {{color: 'rgb(235, 220, 223)'}}
          inputTextStyle= {{border: '1px solid  rgba(110, 111, 113, 0.31)'}}
        />
      </div>
    </Wrapper>
  )
}

export default CLI