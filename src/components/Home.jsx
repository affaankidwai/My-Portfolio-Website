import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-blue-200 font-bold'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-gray-400'>Affaan Kidwai</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a Full Stack Web Developer.</h2>
    <p>Abhi bhar doonga ye sab because I have not yet decided let us what 
    do we need to currently i have no idea lahdo oddsl h dh</p>

    <div>
        <button className='text-white font-bold group border-2 px-6 py-4 my-2 flex items-center hover:bg-blue-600'>
        View Work 
        <span className='group-hover:rotate-90 duration-200'>
        <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
    </div>



    </div>
    </div>
  )
}

export default Home