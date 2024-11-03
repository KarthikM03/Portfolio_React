import React, { useEffect } from 'react'
import Data from '../Assets/Data'
import Card from './Card'
import Navbar from './Navbar'
import Demo from './Demo'

function Projects() {
    let projects = Data.projects
    useEffect(() => {
        let cards = document.querySelectorAll(".transY")
        cards.forEach((e) => {
            e.addEventListener('mouseenter', () => {
                const div = document.createElement('div')
                div.classList.add('Hello','mx-auto','relative')
                let width = e.offsetWidth -30
                let rand = Math.floor(Math.random() * (100 - 50) +50)
                for (let i = 0; i < rand; i++) {
                    let span = document.createElement('span')
                    // span.classList.add('-z-20')
                    let h = Math.ceil(Math.random()*8)
                    span.style.height = h+'px'
                    span.style.width = h+'px'
                    let delay = Math.ceil(Math.random()*1000)
                    let duration = Math.ceil(Math.random()*(1500-300)+300)
                    let left = Math.floor(Math.random()* width)
                    span.style.left=`${left}px`
                    span.style.animationDelay = `${delay}ms`
                    span.style.animationDuration = `${duration}ms`
                    div.appendChild(span)
                }
                e.appendChild(div)
                 
            })
            e.addEventListener('mouseleave', () => {
               e.removeChild(e.lastChild)
            })
        })
    }, [])

    return (
        <div className='w-full h-full'>
            <Demo />
            <Navbar />
            <div className=' mx-auto container flex flex-col justify-center items-center min-h-[80vh] mb-10 w-full'>
                <div className='w-full z-0 text-7xl p-1 text-center'>Projects </div>
                <p className='w-full z-0 text-neutral-400 mb-10 text-center '>Here are some of my recent works and projects</p>
                <div className='flex flex-wrap gap-10 items-center justify-center'>
                    {projects.map((e, index) => (
                        <div key={index}>
                            <Card p={e} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Projects