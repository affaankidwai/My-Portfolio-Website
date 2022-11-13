import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
                About
                </p>


                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-5xl font-bold'>
                        <p>So good to see you here! Have a look around</p>
                    </div>
                    <div>
                        <ul>
                        <li className='mb-5'>Junior in college, currently pursuing B.Tech in CSE w/s in AIML from SRM IST. I am a MERN stack developer. </li>
                        <li>Tennis player at the national level, with a love for all sports. Cars are my second love, besides my passion for wildlife photography. I'm also into music and obviously scrolling reels 🥰</li>
                        </ul>
                    </div>
                </div>

            
        </div>

    </div>
  )
}

export default About