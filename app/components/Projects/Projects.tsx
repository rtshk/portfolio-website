import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <section className='text-white h-screen'>
        <h2 className='text-5xl m-24'>Projects</h2>
        <div className='grid grid-cols-2 gap-28 m-24'>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    </section>
  )
}

export default Projects