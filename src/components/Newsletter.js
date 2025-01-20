import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full bg-white py-16 px-4 text-black'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-4xl font-bold py-2'>Want tips to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='flex w-full rounded-md text-black border border-gray-500 p-3 outline-none' type='email' placeholder='Enter Email' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur elit. Read Our <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;