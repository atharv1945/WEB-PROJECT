import React from 'react';  
import icon1 from "../../Images/icon1.jpeg";
import Gaurantee from "../../Images/Gaurantee.png";
import afford from "../../Images/afford.jpeg";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from "framer-motion";

export const fadeUp = (delay) => {

    return{
        hidden:{
            opacity: 0,
            y: 100,
        },
        show:{
            opacity: 1,
            y: 0,
            transition: {
                duration:0.5,
                delay:delay,
            },
        },
    };
}; 

const ServicesData =[
    {
        id: 1,
        title: "Services",
        icon: icon1,
        desc: "24/7 Customer Support – Our dedicated team is here to assist you anytime, ensuring your experience is seamless and stress-free.\n\nPersonalized Fit & Comfort – With adjustable ear cups and soft memory foam, the Muffled 860-ANC is tailored for your comfort, no matter how long you wear them.\n\nPremium Quality Materials – Crafted with durability and luxury in mind, offering you headphones that look and feel great.",
        delay:0.5,
    },
    {
        id: 2,
        title: "Guarantee",
        link: "#",
        icon: Gaurantee,
        desc: "1-Year Warranty – We stand by the quality of our product. If you experience any issues, we've got you covered with a comprehensive warranty.\n\nSatisfaction Guaranteed – We're confident you'll love your Muffled 860-ANC. If not, return them within 30 days for a full refund.\n\nQuality Assurance – Each pair of Muffled 860-ANC undergoes rigorous testing to ensure superior performance and durability.",
        delay:0.8,
    },
    {
        id: 3,
        title: "Affordability",
        link: "#",
        icon: afford,
        desc: "Exclusive Pricing – Premium technology at an affordable price. Enjoy advanced features without breaking the bank.\n\nFlexible Payment Options – Choose the plan that works best for you, including easy EMI and installment options.\n\nLimited Time Offer – Get yours today at a special introductory price and save big on your next audio upgrade.",
        delay:1.1,
    },
];

const Services = () => {
  return (
    <>
    <section className='bg-slate-500 font-gotham py-7'>
        <div className='container py-12'>
            <motion.h1 
                className='text-4xl font-bold text-center pb-12 uppercase tracking-wide'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
            >
                Services
            </motion.h1>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {ServicesData.map((data =>(
                <UpdateFollower mouseOptions={{
                    backgroundColor: "white", 
                    zIndex: 9999,
                    followSpeed: 1.2,
                    scale: 10,
                    rotate: -720,
                    mixBlendMode: "darken",
                    backgroundElement:(
                        <motion.div>
                            <img src = {data.icon} alt ="" />
                        </motion.div>
                    ),
                }}>
                    <motion.div
                        variants = {fadeUp(data.delay)} 
                        initial="hidden" 
                        whileInView="show"
                        className='flex flex-col justify-start items-center p-6 mx-auto shadow-xl rounded-xl bg-white h-full w-full'
                        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.3 }}>
                        <img src={data.icon} alt = "" className="w-[80px] mb-4"/>
                        <div className='text-center space-y-3 w-full'>
                            <h2 className='text-xl font-bold tracking-wide'>{data.title}</h2>
                            <p className='text-sm text-black/75 leading-relaxed whitespace-pre-line px-2'>{data.desc}</p>
                        </div>
                    </motion.div>
                </UpdateFollower>
            )))}
            </div>
        </div>  
    </section>
    </>
  )
}

export default Services;
