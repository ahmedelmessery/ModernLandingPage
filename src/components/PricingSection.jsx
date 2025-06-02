import React, { useState } from 'react'
import {motion} from "motion/react";
import {fadeIn, scale, slideIn, textVariant} from "../utils/motion";

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1);
    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className=' mx-auto px-4 py-20'>
        <motion.div
              variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
        className='max-w-6xl  mx-auto flex flex-col items-center justify-center gap-4 text-center'>
            <h1 className='font-bold text-3xl'>
                Pricing
            </h1>

            <div className='flex justify-between items-center gap-4 w-full max-w-3xl mt-8 max-sm:flex-col'>
                <div className='flex flex-col items-start justify-center gap-2 px-20 p-8 bg-white rounded-lg shadow-lg'>
                    <span className='text-sm text-gray-600'>Starter</span>
                    <h1 className='font-bold text-2xl'>${starterPrice}/mo</h1>
                </div>

                    <div className='flex flex-col items-start justify-center gap-2 px-20 p-8 bg-white rounded-lg shadow-lg'>
                    <span className='text-sm text-gray-600'>Business</span>
                    <h1 className='font-bold text-2xl'>${businessPrice}/mo</h1>
                </div>
            </div>

            <div className="w-lg mx-auto max-sm:w-fit mt-4">
          <p className="text-center text-gray-600 mb-4">
            {productCount} products
          </p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>
            </div>


            <div className='mt-6 text-center'>
                <p className='text-xl text-gray-600 mb-4'>Ready to get started?</p>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer'>Get Started</button>
            </div>
        </motion.div>
    </section>
  )
}

export default PricingSection