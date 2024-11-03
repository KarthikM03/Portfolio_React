import React, { useEffect } from 'react'
import Data from '../Assets/Data'
import Navbar from './Navbar'
import Demo from './Demo'

function Skills() {
    let data = Data.Skills

    useEffect(() => {
        const sk = document.querySelectorAll(".sk")
        sk.forEach((e) => {
            e.addEventListener('mouseenter', () => { e.childNodes[0].classList.add('hvr') })
            e.addEventListener('mouseleave', () => {  e.childNodes[0].classList.remove('hvr')})
        })

        const div = document.querySelectorAll(".div")
        div.forEach((e) => {
            e.addEventListener("mouseenter", () => { e.childNodes[0].classList.add('gtext') })
            e.addEventListener("mouseleave", () => { e.childNodes[0].classList.remove('gtext') })
        })
    }, [])

    return (
        <>
            <Demo/>
            <Navbar />
            <div className="container mx-auto flex justify-center items-center flex-col p-5 h-full">
                <h1 className='w-full sm:text-7xl text-5xl p-1 text-center z-0'>Skills</h1>
                <span className='w-[20%] h-1 bg-gradient-to-r from-orange-500 to-purple-700 rounded-sm mb-6 z-0'></span>
                <div className='flex flex-col gap-4 '>
                    {data.map((k, index) => (
                        <div key={index} className='p-2 w-full div mb-6 z-0'>
                            <h1 className='sm:text-5xl text-4xl p-1 text-start w-full mb-7' >{k.name}</h1>
                            <div className='mt-5 grid grid-cols-3 sm:grid-cols-4 gap-y-9 gap-5 '>
                                {k.skill.map((k, index) => (
                                    <div key={index} className='sk w-full flex flex-col justify-center items-center relative ' >
                                        <img className='bg z-10 p-2 rounded-lg h-[100px] w-[100px] ' src={k.img} alt="" />
                                        <div className='-z-1 absolute font-bold bottom-1 text-neutral-300'>{k.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills