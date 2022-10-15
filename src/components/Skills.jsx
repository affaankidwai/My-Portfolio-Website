import React from 'react'

import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import MONGO from '../assets/mongo.png'
import NODE from '../assets/node.png'
import PYTHON from '../assets/python.png'
import REACT from '../assets/react.png'
import FIREBASE from '../assets/css.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  text-gray-400'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
        <p className='text-4xl font-bold inline border-b-4  '>Skills</p>
        <p className='py-4'>My Tech Stack</p>
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={JS} alt="HTML icon" />
            <p>JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={NODE} alt="HTML icon" />
            <p>NODE</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={REACT} alt="HTML icon" />
            <p>REACT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={PYTHON} alt="HTML icon" />
            <p>PYTHON</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={MONGO} alt="HTML icon" />
            <p>MONGO</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p>FIREBASE</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Skills