import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {FreeMode, Pagination} from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from '../constants/data';

const Courses = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
    <p className='text-[#00df9a] font-bold text-2xl'>Our Courses</p>
    <h1 className='md:text-2xl sm:text-2xl text-2xl py-4 text-white'>We Provide a Variety of Courses</h1>
        <Swiper
            breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 15
                }, 
                600: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            }}

            freeMode={true}
            pagination={{
                clickable: true,
                
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[80%] relative'
        >

         {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
                <div className='flex flex-col gap-2 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[300px] md:w-[215px] lg:h-[350px] lg:w-[300px] overflow-hidden cursor-pointer'>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                    <div className="absolute z-10 inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                    <div className='relative flex flex-col gap-3'>
                        <item.icon className='text-blue-900 group-hover:text-blue-700 w-[20px] h-[20px]'/>
                        <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                        <p className="text-sm mt-2">{item.content}</p>
                    </div>
                    <RxArrowTopRight className='absolute bottom-3 w-[25px] h-[25px] text-white group-hover:to-blue-600 group-hover:rotate-45 duration-100'/>
                </div>
            </SwiperSlide>
         ))}
        </Swiper>
    </div>
  )
}

export default Courses;