import React from 'react'
import Navbar from './Navbar'
import img from '../Assets/My pic.jpg'
import { Link } from 'react-router-dom'
import Demo from './Demo'


function Home() {
  return (
    <>
      <Demo />
      <Navbar />
      <div className='mx-auto container h-[80vh]  z-10 flex flex-col-reverse gap-8 sm:flex-row sm:justify-center justify-center items-center'>
        <div className="container flex flex-col  gap-4 text-4xl  mx-auto p-4 justify-center w-full z-0">
          <h1 className='sm:text-6xl text-3xl text-wrap text '>I'm Karthik, Front-end developer</h1>
          <p className='sm:text-lg text-sm ml-2  text-neutral-400/80'>Recently completed graudate with the skills of front-end developement and programming langauages </p>
          <Link to='/projects' className='flex w-max backdrop-blur rounded-xl items-center gap-3 text-base p-2 '>Projects <i className="fa-solid fa-arrow-right"></i> </Link>
        </div>
        <div className=' z-0 sm:w-[400px] w-[200px]'>
          <img className=' rounded-[50%] aspect-square img object-cover' src={img} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home

