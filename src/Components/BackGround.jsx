import React, { useEffect } from 'react'

function BackGround() {
  let rand = Math.ceil(Math.random() * (200 - 150) + 150)
  // console.log('width:',window.innerWidth,"height ",window.innerHeight)
  let praticals = () => {
    let star = document.querySelector(".star")
    let width = window.innerWidth
    let height = window.innerHeight
    for (let i = 0; i < rand; i++) {
      let span = document.createElement('span')
      span.classList.add('pan')
      let dir = Math.ceil(Math.random() * 4)
      switch (dir) {
        case 1: span.classList.add('one')
          break
        case 2: span.classList.add('two')
          break
        case 3: span.classList.add('three')
          break
        case 4: span.classList.add('four')
          break

        default:
      }
      let h = Math.ceil(Math.random() * (15 - 2) + 2)
      let left = Math.ceil(Math.random() * width)
      let top = Math.ceil(Math.random() * height)
      span.style.height = h + "px"
      span.style.width = h + "px"
      span.style.left = left + "px"
      span.style.top = top + "px"
      star.appendChild(span)
    }
  }

  setInterval(() => 
    {
    let star = document.querySelector(".star")
    star.innerHTML = ''
    praticals()
    }, 8800)

  useEffect(() => {
    praticals()
  },[])

  return (

    <div className=' absolute w-full h-full' >
      <div className="star h-full w-full">
      </div>
    </div>
  )
}

export default BackGround