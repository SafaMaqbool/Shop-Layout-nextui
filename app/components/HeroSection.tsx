import React from 'react';
import hero from "../../public/assets/heroimg.svg";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="mx-12 absolute bg-black rounded-xl">
      <Image
        src={hero}
        alt="TitleImage"
        className="h-[400px] sm:h-[597px] rounded-xl opacity-70 object-cover"
       
      />
    </div>

    <div className="flex flex-col gap-y-8 h-[400px] sm:h-[597px] justify-center items-center relative">
      <div className="text-4xl sm:text-6xl font-bold text-center text-white">
        Shop title
      </div>
      <div className="text-lg sm:text-xl px-20 text-center text-white">
        Subheading with description of your shopping site
      </div>
      <div>
      <button className='bg-black text-white p-[14px] rounded-lg font-medium text-[16px]'>Button</button>

      </div>
      
    </div>
    </div>
  );
};

export default HeroSection;
