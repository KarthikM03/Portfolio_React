import React from 'react'
import Navbar from './Navbar'
import Demo from './Demo'

function About() {
  return (
    <>
      <Demo/>
      <Navbar />
      <div className='mt-10 div sm:w-[80%] w-full mx-auto blurr p-5 relative'>
        <div className='undrr'>
          <h1 className=' sm:text-5xl text-2xl sm:mb-5 mb-2'>About Me</h1>
          <p className=' text-neutral-400/80 sm:text-xl text-sm tracking-wider text-wrap'>
            I'm a passionate and driven software developer with a strong background in  key languages/technologies, e.g., JavaScript, Python, React. My journey in coding started with a simple curiosity about how things work and has grown into a full-fledged career in creating intuitive, user-friendly applications.
            <br />
            <br />
                I thrive in dynamic environments, solving complex problems with innovative solutions, and I'm always eager to learn and adapt to new challenges. My experience includes briefly mention projects e.g., developing web applications showcasing my versatility and dedication to delivering high-quality code.
          </p>
        </div>
        <div className="undrr contact sm:mt-5 py-2">
          <h1 className='sm:text-4xl text-xl'>Contact </h1>
          <div className='flex flex-wrap gap-8 sm:mt-3 p-3' >
            <a href="https://github.com/KarthikM03"> <i className="fa-brands fa-github sm:text-5xl text-3xl"></i></a>
            <a href="https://cdnjs.com/libraries/font-awesome"> <i className="fa-brands fa-linkedin sm:text-5xl text-3xl"></i></a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsCVvSbxjzmrBHkfwJZNZSFTGRhvWKCWgHbBHvWfDfLChQFkFCzndGXrRzRxzbSVFRlcStRl"> <i className="fa-regular fa-envelope sm:text-5xl text-3xl"></i></a>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default About