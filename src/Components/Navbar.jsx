import React, { useState } from 'react'
import img from '../Assets/My pic.jpg'
import {Link } from 'react-router-dom'

function Navbar() {
    let [large, setLarge] = useState(false)
    let toggleNav = () => {
        // console.log(large)
        setLarge(!large)
    };
    return (
        <>
        <div className='-z-2 bg-gradient-to-r from-black via-purple-600 to-black w-full h-12 fixed top-0'></div>
        <nav className="sticky top-0 z-10 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto  relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        {/* <img className='h-10 w-10 mr-3 rounded-[50%] aspect-square ' src={img} alt="logo" /> */}
                        <span className=" font-bold text-4xl tracking-light ">Karthik</span>
                    </div>
                    <ul className="hidden relative lg:flex ml-4 space-x-12 text-xl ">
                        <li className='undr'><Link to='/'>Home</Link></li>
                        <li className='undr'><Link to='/projects'>Projects</Link></li>
                        <li className='undr'><Link to='/skills'>Skills</Link></li>
                        <li className='undr'><Link to='/about'>About</Link></li>
                        {/* <li className='underline-offset-1  hover:underline decoration-purple-600'><Link to='/contact'>Contact Me</Link></li> */}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNav}>
                            {large ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
                        </button>
                    </div>
                </div>
                {large && (
                    <div className="fixed right-0 mt-3 z-30 bg-neutral-900 w-full  lg:hidden">
                        <ul className='flex flex-col justify-center items-center w-full gap-3 text-center'>
                            <li className='py-2 w-[20%] border m-2 rounded-lg'><Link to='/'>Home</Link></li>
                            <li className='py-2 w-[20%] border m-2 rounded-lg'><Link to='/projects'>Projects</Link></li>
                            <li className='py-2 w-[20%] border m-2 rounded-lg'><Link to='/skills'>Skills</Link></li>
                            <li className='py-2 w-[20%] border m-2 rounded-lg'><Link to='/about'>About</Link></li>
                            {/* <li className='py-2 w-[20%] border rounded-lg'><Link to='/contact'>Contact Me</Link></li> */}
                        </ul>
                    </div>
                )}

            </div>
        </nav>
        </>
    )
}

export default Navbar