import React from 'react'

function Card(e) {
    
    return (
        <div className='container w-[300px] relative hover:shadow-[0px_0px_15px_rgba(160,0,210,0.7)] transY border-2 border-neutral-600 rounded-xl p-2 pb-5'>
            <div className='flex flex-col gap-1 '>
                <div className='w-30 '>
                    <img className='aspect-[3/2] rounded-lg object-cover' src={e.p.img} alt="" />
                </div>
                <h1 className=' p-1 font-bold text-xl '>{e.p.name}</h1>
                <div className='flex skill w-full overflow-x-scroll p-1 cursor-default items-center gap-4 no-scrollbar '>
                    {e.p.skills.map((k, index) => (
                        <span className='text-sm font-semibold tracking-wider bg-purple-500/70 text-nowrap rounded-md p-1' key={index}>{k}</span>
                    ))}
                </div>
                <div className='w-full text-wrap mt-2  overflow-y-scroll no-scrollbar rounded-md h-[6rem]'>
                    <p className=' px-2 text-sm relative text-neutral-400/90 cursor-default '>{e.p.desc}</p>
                </div>
                <div className='flex justify-around font-semibold flex-shrink-0 mt-3'>
                    <button className='bg-white btnn py-1 px-3 text-purple rounded-md'><a href={e.p.live}>Live <i className="fa-solid fa-eye"></i> </a></button>
                    <button className='bg-white btnn py-1 px-3 text-purple rounded-md'><a href={e.p.code}>Code <i className="fa-solid fa-code"></i> </a></button>
                </div>
            </div>
        </div>
    )
}

export default Card