import React from 'react'

import './../styles/components/projectscontainer.sass';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Ainda em construção... Logo mais você verá muitos projetos meus aqui!
      </p>
      <br></br>
      <div className='projects'>
        <a href='https://midi-murex.vercel.app/' target='_blank' rel="noopener noreferrer" className='btn'>
          midi
        </a>
        <a href='https://secretword-inky.vercel.app/' target='_blank' rel="noopener noreferrer" className='btn'>
          secret word game
        </a>
      </div>  
    </section>
  )
}

export default ProjectsContainer