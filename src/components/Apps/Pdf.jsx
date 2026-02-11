import React, { useEffect } from 'react'
import Wrapper from '../TaskbarComp/Wrapper'
import './pdf.scss'
const Pdf = () => {
    const store = null;

  return (
   <Wrapper>
    <div className="resume-app">
        <iframe src="./resume.pdf" width={'800px'}/>
    </div>
   </Wrapper>
  )
}

export default Pdf