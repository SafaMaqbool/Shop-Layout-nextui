import React from 'react';
import { FaHamburger } from 'react-icons/fa';

const Nav = [{ name: "page" }, { name: "page" }, { name: "page" }]


export const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-10 px-20'>
            <div className=''>
                <p className='text-[20px] font-medium'>SiteName</p>
            </div>
            
            <  FaHamburger className='flex sm:hidden'/>
            <div className=' hidden sm:flex gap-x-4 justify-center items-center '>
                
                {Nav.map((item, index) => {
                    return <p className='text-[20px] font-medium' key={index}>{item.name}</p>;
                })}
               
                <button className='bg-black text-white p-[14px] rounded-lg font-medium text-[16px]'>Button</button>

            </div>
        </div>
    )
}
