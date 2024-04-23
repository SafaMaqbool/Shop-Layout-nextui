import React from 'react';
import extraprod1 from '../../public/assets/extraprod1.svg';
import extraprod2 from '../../public/assets/extraprod2.svg';
import extraprod3 from '../../public/assets/extraprod3.svg';
import extraproduct from '../../public/assets/extrprodofficical.jpg'
import Image from 'next/image';

const products = [
    {
        prodno: 1,
        image: extraprod1,
        title: "Featured Product",
        description: "Description of featured product",
        price: "$10.00"
    },
    {
        prodno: 2,
        image: extraprod2,
        title: "Product",
        description: "Description of product",
        price: "$10.00"
    },
    {
        prodno: 3,
        image: extraprod3,
        title: "Product",
        description: "Description of product",
        price: "$10.00"
    },

]

const ExtraProduct = () => {
    return (
        <div className="px-12">
        <div className="font-bold text-[30px] mt-12 mb-8">Heading</div>
  
        <div className="grid sm:grid-cols-2  grid-cols-1 gap-4">
          <div>
            <Image
              src={extraproduct}
              alt=""
              className="h-[704px] object-cover rounded-lg"
            />
            <div className="text-[16px] font-semibold mt-4">Featured Product</div>
            <div className="text-[16px] text-[#828282]">
              Description of first product
            </div>
            <div className="text-[16px] font-semibold">$240.00</div>
          </div>
  
          <div className="grid grid-rows-2 items-center gap-4">
            <div>
              <Image
                src={extraproduct}
                alt=""
                className="h-[300px] object-cover rounded-lg"
              />
              <div className="text-[16px] font-semibold mt-4">
                Featured Product
              </div>
              
              <div className="text-[16px] text-[#828282]">
                Description of first product
              </div>
              <div className="text-[16px] font-semibold">$240.00</div>
            </div>
            <div>
              <Image
                src={extraproduct}
                alt=""
                className="h-[300px] object-cover rounded-lg"
              />
              <div className="text-[16px] font-semibold mt-4">
                Featured Product
              </div>
              <div className="text-[16px] text-[#828282]">
                Description of first product
              </div>
              <div className="text-[16px] font-semibold">$240.00</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ExtraProduct
