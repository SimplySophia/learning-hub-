import React from 'react';
import { UserData } from '../constants/data';


const Review = () => {
  return (
    <div className='w-full bg-white py-8 px-4 text-black text-center'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='w-full text-2xl font-bold text-[#00df9a]'>Brain.</h1>
        <h3 className='md:text-4xl sm:text-3xl font-bold py-2 text-xs'>Courses was fantastic.It is taillored to suit learning pace.Overall, a great experience!</h3>
        <div className='flex justify-center items-center'>
          {UserData.map((item) => (
             <div key={item.name}>
                <div className='flex flex-col gap-2 group relative px-6 py-8 h-32 w-32 overflow-hidden cursor-pointer'>
                  <div
                    className="absolute top-1/2 left-24 inset-0 bg-cover bg-center"
                    style={{backgroundImage: `url(${item.backgroundImage})` }}
                  />
                </div>
                <p>{item.name}</p>
                <h3 className='font-medium'>{item.Personality}</h3>
              </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Review;