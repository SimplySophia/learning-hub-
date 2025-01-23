import React from 'react';
import { 
    FaFacebookSquare,
    FaInstagramSquare,
    FaGithubSquare,
    FaDribbbleSquare,

} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-2xl font-bold text-[#00df9a]'>Brain.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, delectus? Recusandae autem consectetur aspernatur assumenda?</p>
            <div className='flex justify-between md:w-[75%] my-6 mx-2'>
                <FaFacebookSquare size={20}/>
                <FaInstagramSquare size={20}/>
                <FaGithubSquare size={20}/>
                <FaDribbbleSquare size={20}/>
                <FaSquareXTwitter size={20}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-5'>
            <div>
                <h6 className='font-medium text-gray-400'>Product</h6>
                <ul>
                    <li className='py-2 text-sm'>Overview</li>
                    <li className='py-2 text-sm'>Features</li>
                    <li className='py-2 text-sm'>Solutions</li>
                    <li className='py-2 text-sm'>Tutorials</li>
                    <li className='py-2 text-sm'>Pricing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About Us</li>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>Press <label className='bg-white text-gray-600 rounded-full py-0 px-2'>New</label></li>
                    <li className='py-2 text-sm'>News</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Social</h6>
                <ul>
                    <li className='py-2 text-sm'>Facebook</li>
                    <li className='py-2 text-sm'>Instagram</li>
                    <li className='py-2 text-sm'>Github</li>
                    <li className='py-2 text-sm'>Dribbble</li>
                    <li className='py-2 text-sm'>Xtwitter</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Terms</li>
                    <li className='py-2 text-sm'>Privacy</li>
                    <li className='py-2 text-sm'>Cookies</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;