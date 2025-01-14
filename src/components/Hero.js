import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl'>Learn the latest skills with Brain</p>
            <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-6'>Up Your Skill With Brain.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold'>Professional Skills Available </p>
                <ReactTyped
                   className='md:text-4xl sm:text-2xl font-bold pl-2' 
                   strings={['HTML', 'CSS', 'SAAS']} 
                   typeSpeed={120} backSpeed={140} 
                   loop 
                />
            </div>
        </div>
    </div>
  )
}

export default Hero;