import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex justify-between mx-12 border-t-2 py-12'>
        <div className='flex flex-col justify-between gap-[96px]'> 
          <p className='text-[24px] font-normal'>SiteName</p>
          
          <div className='flex flex-row gap-8'>
            {/* icons */}
            <FaFacebookF />
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
          </div>

        
        </div>
       
        <div className='flex gap-8'>
        <div className='flex flex-col gap-8'>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>

         </div>
         
         <div className='flex flex-col gap-8'>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>

         </div>

         <div className='flex flex-col gap-8'>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>

         </div>
         </div>
        
    </div>
  )
}

export default Footer