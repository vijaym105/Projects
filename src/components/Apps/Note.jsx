import React, { useEffect, useState } from 'react'
import MarkDown from "react-markdown";
import Wrapper from '../TaskbarComp/Wrapper';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './notes.scss'
const Note = ({windowName ,setWindowState}) => {
    const [markDown, setMarkDown] = useState(null)
    useEffect(() =>{
        fetch('./notes.txt') // to fetch file data {file must be in public folder } 
        .then(res => res.text())
        .then(text => setMarkDown(text))
    },[])

    
  return (
    <Wrapper windowName={windowName} setWindowState={setWindowState}>
        <div className="notes-app">
            {markDown ?  <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
      {markDown}
    </SyntaxHighlighter> : <p>Nothing found</p>}
        </div>
    </Wrapper>
  )
}

export default Note