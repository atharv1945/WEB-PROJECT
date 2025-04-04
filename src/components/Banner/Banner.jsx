import React from 'react';
import headphone4 from "../../Images/headphone4.png";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
    <section>
      <div className='container py-14 grid md:grid-cols-2 items-center'>
        <div className='flex flex-row justify-center'>
            <motion.img 
            initial = {{opacity: 0.1, x: 0, rotate: -360}}
            animate={{ opacity: 1, x: 0, rotate: 0}}
            transition={{duration: 2.0, delay: 0.8, ease: "easeInOut"}}
            src={headphone4} 
            alt='Muffled 860-ANC Headphones' 
            className='w-[400px] h-[250px] object-contain'/>
        </div>

        <div className='flex flex-col justify-center text-left ml-1 pr-2'>
            <div className='space-y-4 lg:max-w-[450px] text-center md:text-left'>
                <h1 className='text-3xl font-semibold font-gotham'>Latest Headphones With The Latest Technology</h1>
                <p className='text-gray-600 leading-relaxed'>
                    Unleash pure audio with the Muffled 860-ANC. Experience superior sound quality, 40-hour battery life, and fast charging technology. Designed for ultimate comfort and uninterrupted listening.
                </p>
                <Link to="/checkout">
                    <motion.button 
                        className='px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shop Now
                    </motion.button>
                </Link>
            </div>
        </div>
        </div>
    </section>
    </>
  );
};

export default Banner
