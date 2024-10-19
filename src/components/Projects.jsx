import React from 'react'
import HighLight from './HighLight'

const Projects = () => {
  return (
    <div>
        <HighLight text={"My Projects"} />
        <h1 className='mt-9 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Check out my latest work</h1>
        {/* This will contain the projects */}
        <div>

        </div>
    </div>
  )
}

export default Projects