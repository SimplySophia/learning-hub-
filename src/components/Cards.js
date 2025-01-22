import React from 'react';
import { CiUser } from "react-icons/ci";
import { PiUsers } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-black flex'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-[300px] text-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-950'>
                <CiUser className='w-20 mx-auto text-3xl'/>
                <h2 className='text-2xl font-bold text-center py-4'>One-on-One Classes</h2>
                <p className='text-center text-2xl font-bold'>$50</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-0 mt-8 text-xs'>Subscription Plans: monthly</p>
                    <p className='py-2 border-b mx-0 text-xs'>Available Time Slots: daily, weekly options</p>
                    <p className='py-2 border-b mx-0 text-xs'>Class Duration: custom sessions</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Enroll Now</button>
            </div>
            <div className='w-[300px] text-white shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 bg-slate-900'>
                <PiUsers className='w-20 mx-auto text-3xl'/>
                <h2 className='text-2xl font-bold text-center py-4'>Paired Learning (2-3 members with a tutor)</h2>
                <p className='text-center text-2xl font-bold'>$25</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-0 mt-8 text-xs'>Subscription Plans: monthly</p>
                    <p className='py-2 border-b mx-0 text-xs'>Available Time Slots: weekly</p>
                    <p className='py-2 border-b mx-0 text-xs'>Class Duration: 1 hour</p>
                </div>
                <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Enroll Now</button>
            </div>
            <div className='w-[300px] text-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-950'>
                <PiUsersThree className='w-20 mx-auto text-3xl'/>
                <h2 className='text-2xl font-bold text-center py-4'>Group Classes</h2>
                <p className='text-center text-2xl font-bold'>$10</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-0 mt-4 text-xs'>Subscription Plans: One-time payment</p>
                    <p className='py-2 border-b mx-0 text-xs'>Available Time Slots: weekly, Bi weekly options</p>
                    <p className='py-2 border-b mx-0 text-xs'>Class Duration: custom sessions</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Enroll Now</button>
            </div>
        </div>
    </div>
  )
}
/*<PiUsers />
<PiUsersThree />*/
export default Cards;
