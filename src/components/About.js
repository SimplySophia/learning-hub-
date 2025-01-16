import React from 'react';
import WorkSpace from '../assets/workspace.png';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500] mx-auto my-4' src={WorkSpace} alt='/' />
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>About Page</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Brain Premium Classes</h1>
            <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                veniam dolorem porro nisi eius totam facere delectus, laborum atque,
                ea repudiandae assumenda! Sunt pariatur a dolores et officiis, necessitatibus
                rem ipsa, fuga amet rerum numquam laudantium quaerat? Quas, nihil officiis!
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div> 
  )
}

export default About;