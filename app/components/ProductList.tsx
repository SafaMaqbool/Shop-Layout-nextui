import React from 'react';
import product1 from '../../public/assets/product1.svg';
import product2 from '../../public/assets/product2.svg';
import product3 from '../../public/assets/product3.svg';
import product4 from '../../public/assets/product4.svg';
import product5 from '../../public/assets/product5.svg';
import product6 from '../../public/assets/product6.svg';
import Image from 'next/image';


const prod =[
  {
    prodNo:1,
    image: product1,
    title: "Product",
    description: "Description of Product 1",
    price:"$10.00"

  },
  {
    prodNo:2,
    image: product2,
    title: "Product",
    description: "Description of Product 2",
    price:"$10.00"

  },
  {
    prodNo:3,
    image: product3,
    title: "Product",
    description: "Description of Product 3",
    price:"$10.00"

  },
  {
    prodNo:4,
    image: product4,
    title: "Product",
    description: "Description of Product 4",
    price:"$10.00"

  },
  {
    prodNo:5,
    image: product5,
    title: "Product",
    description: "Description of Product 5",
    price:"$10.00"

  },
  {
    prodNo:6,
    image: product6,
    title: "Product",
    description: "Description of Product 6",
    price:"$10.00"

  }


]
const ProductList = () => {
  return (
    <div className='mx-12 mt-16'>
      <h1 className='text-[40px] font-semibold pb-8'>Heading</h1>

      <div className='grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-1 gap-4 '>
        {prod.map((product)=>{
          return(
            <div key={product.prodNo}>
              <div>
                <Image src={product.image} alt='' className='object-cover'/>
              </div>

              <div className='text-[20px] font-medium pt-6'>
                {product.title}
              </div>

              <div className='text-[#828282] text-[20px] font-medium'>
                {product.description}
              </div>

              <div className='text-[20px] font-medium'>
                {product.price}
              </div>

            </div>
          )

        })}

      </div>
    </div>
  )
}

export default ProductList;