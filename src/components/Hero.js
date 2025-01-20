import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl'>Learn the latest skills with Brain</p>
            <h1 className='md:text-6xl sm:text-4xl text-4xl font-bold md:py-4'>Up Your Skill With Brain.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold py-4'>Tools Available For UI/UX Design</p>
                <ReactTyped
                   className='md:text-4xl sm:text-2xl font-bold md:pl-4 pl-2' 
                   strings={['Figma', 'Framer', 'Adobe XD']} 
                   typeSpeed={120} backSpeed={140} 
                   loop 
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet consectetur elit.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero;