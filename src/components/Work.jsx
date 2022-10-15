import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen  text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
                Work
                </p>


                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Affaan. Nice to see you here! Have a look around</p>
                    </div>
                    <div>
                        <ul>
                        <li>I am a junios in college. Currently pursuing B.Tech in CSE w/s in Artificial Intelligence and Machine Learning from SRM KTR. I am a MERN stack developer and an aspiring Machine Learning Engineer </li>
                        </ul>
                    </div>
                </div>

            
        </div>

    </div>
  )
}

export default Work