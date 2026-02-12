import React from 'react'
import githubData from '../../assets/GitData/git.json'
import Wrapper from '../TaskbarComp/Wrapper'
import "./git.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
  return <div className="card">

    <img className='img' src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className='description' >{data.description}</p>

    <div className="tags">
      {
        data.tags.map((tag, idx) => <p key={idx} className='tag' >{tag}</p>)
      }
    </div>

    <div className="urls">
      <a href={data.repoLink}>Repository</a>
      {data.demoLink && <a href={data.demoLink}>Demo link</a>}
    </div>
  </div>
}




const Github = ({windowName , setWindowState}) => {
  console.log(windowName,setWindowState);
  
  return (
    <Wrapper  windowName={windowName}  setWindowState ={setWindowState}>
      <div className="cards">
                {githubData.map((project, id) => {
                    return <GitCard key={id} data={project} />
                })}
            </div>
    </Wrapper>
  )
}

export default Github
