import React, { useEffect } from 'react'
import Wrapper from '../TaskbarComp/Wrapper'
import './pdf.scss'
const Pdf = ({windowName , setWindowState}) => {
    const store = null;

  return (
   <Wrapper  windowName={windowName}  setWindowState ={setWindowState}>
    <div className="resume-app">
        <iframe src="./resume.pdf" />
    </div>
   </Wrapper>
  )
}

export default Pdf