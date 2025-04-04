import React from 'react';
import { FaMapLocation, FaX, FaPhone } from 'react-icons/fa6';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Cards from "../../Images/Cards.png";
import { motion } from 'framer-motion';

const Footern = () => {
  return (
    <motion.footer 
      className='bg-brandDark pt-10 pb-9 text-white min-h-[380px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="container">
        <div className='grid grid-cols-3 gap-8'>
          <motion.div 
            className='space-y-5'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-3xl font-bold uppercase'>Playing</h1>
            <p className='text-sm max-w-[300px] leading-relaxed'>
              It's short, catchy, and captures the essence of your noise-canceling technology and superior audio experience. Let me know if you'd like something else!
            </p>
            <div>
              <p className='flex items-center gap-2'>
                <FaPhone />
                +91 9999855239
              </p>
              <p className='flex items-center gap-2 mt-2'>
                <FaMapLocation />
                Vellore, Tamil Nadu
              </p>
            </div>
          </motion.div>
          <motion.div 
            className='space-y-6'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-3xl font-bold'>Quick Links</h1>
            <div className="grid grid-cols-2">
              <ul className='space-y-3'>
                <li><a href="../" className='hover:text-yellow-400 transition-colors duration-300'>Home</a></li>
                <li><a href="../about" className='hover:text-yellow-400 transition-colors duration-300'>About</a></li>
                <li><a href="../contact" className='hover:text-yellow-400 transition-colors duration-300'>Contact</a></li>
                <li><a href="../reviews" className='hover:text-yellow-400 transition-colors duration-300'>Reviews</a></li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className='space-y-6'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-3xl font-bold'>Follow Us</h1>
            <div className="flex items-center gap-6">
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <a href='https://www.instagram.com/atharvagarwal_06/' target='blank' className='hover:text-yellow-400 transition-colors duration-300'><FaInstagram className='text-3xl' /></a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <a href='https://www.linkedin.com/in/atharv-agarwal-vit2006/' target='blank' className='hover:text-yellow-400 transition-colors duration-300'><FaLinkedin className='text-3xl' /></a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <a href='https://x.com/Atharv1945' target='blank' className='hover:text-yellow-400 transition-colors duration-300'><FaX className='text-3xl' /></a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <a href="https://github.com/atharv1945" target='blank' className='hover:text-yellow-400 transition-colors duration-300'><FaGithub className='text-3xl' /></a>
              </motion.div>
            </div>
            <div>
              <p>Payment Methods</p>
              <img src={Cards} alt="Payment Methods" className='w-[150px]' />
            </div>
          </motion.div>
        </div>
        <p className='text-center mt-8 text-sm text-white/80'>Copyrights 2025. All Rights Reserved || Atharv Agarwal, Akarsh Katiyar, Shaurya Maloo</p>
      </div>
    </motion.footer>
  );
}

export default Footern;
