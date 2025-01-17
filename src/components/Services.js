import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {FreeMode, Pagination} from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from '../constants/data';

const Services = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
        <Swiper
            breakpoints={{
                340: {
                    slidesPreView: 2,
                    spaceBetween: 15
                }, 
                200: {
                    slidesPreView: 3,
                    spaceBetween: 15
                }
            }}

            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[80%]'
        >

         {ServiceData.map((item) => {
            <SwiperSlide key={item.title}>
                <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px]'></div>
            </SwiperSlide>
         })}
        </Swiper>
    </div>
  )
}

export default Services;