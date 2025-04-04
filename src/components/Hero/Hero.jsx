import React from 'react'
import hpp from "../../Images/Black.jpg";
import hpp1 from "../../Images/Blue.jpg"; 
import hpp2 from "../../Images/w1.webp";  
import { FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { UpdateFollower } from 'react-mouse-follower';
import { Link } from 'react-router-dom';


const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            },
        },
    };
};

const HeadphoneData = [{
    id: 1,
    image: hpp,
    title: "Muffled 860-ANC",
    subtitle: "Experience True Silence & Pure Sound. Introducing the Muffled 860-ANC, your ultimate noise-canceling companion. With crystal-clear audio, deep bass, and advanced ANC technology, immerse yourself in uninterrupted music, calls, and focus. Designed for all-day comfort with a sleek, modern look.\n\n🔊 Active Noise Cancellation – Tune out distractions, focus on what matters.\n🎵 Superior Sound Quality – Rich bass, balanced mids, and crisp highs.\n🔋 40-Hour Battery Life – Non-stop music for long journeys and workdays.\n⚡ Fast Charging – 10 minutes of charge = 5 hours of playback.\n\n👉 Upgrade your listening experience today!",
    price: "Rs. 3800",
    modal: "Modal Black",
    bgColor: "#000000",
}, {
    id: 2,
    image: hpp2,
    title: "Muffled 860-ANC",
    subtitle: "Experience True Silence & Pure Sound. Introducing the Muffled 860-ANC, your ultimate noise-canceling companion. With crystal-clear audio, deep bass, and advanced ANC technology, immerse yourself in uninterrupted music, calls, and focus. Designed for all-day comfort with a sleek, modern look.\n\n🔊 Active Noise Cancellation – Tune out distractions, focus on what matters.\n🎵 Superior Sound Quality – Rich bass, balanced mids, and crisp highs.\n🔋 40-Hour Battery Life – Non-stop music for long journeys and workdays.\n⚡ Fast Charging – 10 minutes of charge = 5 hours of playback.\n\n👉 Upgrade your listening experience today!",
    price: "Rs. 3800",
    modal: "Modal White",
    bgColor: "#808080",
}, {
    id: 3,
    image: hpp1,
    title: "Muffled 860-ANC",
    subtitle: "Experience True Silence & Pure Sound. Introducing the Muffled 860-ANC, your ultimate noise-canceling companion. With crystal-clear audio, deep bass, and advanced ANC technology, immerse yourself in uninterrupted music, calls, and focus. Designed for all-day comfort with a sleek, modern look.\n\n🔊 Active Noise Cancellation – Tune out distractions, focus on what matters.\n🎵 Superior Sound Quality – Rich bass, balanced mids, and crisp highs.\n🔋 40-Hour Battery Life – Non-stop music for long journeys and workdays.\n⚡ Fast Charging – 10 minutes of charge = 5 hours of playback.\n\n👉 Upgrade your listening experience today!",
    price: "Rs. 3800",
    modal: "Modal Blue",
    bgColor: "#7A8CA3",
}];

const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };

    return (
        <>
            <section className='bg-brandDark text-white font-poppins'>
                <div className='container grid md:grid-cols-2 min-h-[200px] items-center'>
                    <div className='flex flex-col md:justify-center py-10 xl:max-w-[500px]'>
                        <div className='space-y-4 md:text-left pb-15'>
                            <AnimatePresence mode='wait'>
                                <UpdateFollower mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 1.7,
                                    scale: 5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                }}>
                                    <motion.h1
                                        key={activeData.id}
                                        variants={fadeUp(0.4)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className='text-6xl font-extrabold font-gotham tracking-tight'>{activeData.title}
                                    </motion.h1>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-base leading-relaxed text-white/90 whitespace-pre-line'>{activeData.subtitle}</motion.p>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <Link to="/checkout">
                                        <motion.button
                                            style={{ 
                                                background: 'linear-gradient(135deg, #FF4D4D 0%, #F9CB28 100%)',
                                            }} 
                                            className='px-8 py-4 text-lg font-semibold rounded-lg text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                                            whileHover={{ 
                                                boxShadow: "0px 0px 20px rgba(249, 203, 40, 0.4)",
                                            }}
                                        >
                                            Buy Now
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>

                            <div className=' flex items-center justify-start gap-3 !mt-20'>
                                <p className='uppercase text-sm'>Top in the class headphones for you!</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-10'>
                            {HeadphoneData.map((item) => {
                                return (
                                    <UpdateFollower mouseOptions={{
                                        backgroundColor: item.bgColor,
                                        zIndex: 999,
                                        followSpeed: 0.7,       
                                        scale: 5,
                                        text: "View Details",
                                        textFontSize: "3px",
                                        rotate: -360,
                                    }}>
                                        <div onClick={() => handleActiveData(item)} className=' grid grid-cols-2 place-items-center cursor-pointer'>
                                            <div className='pt-2 pb-3 mr-1'>
                                                <img src={item.image} alt="" className='w-{200px}' />
                                            </div>
                                            <div className='space-y-3'>
                                                <p className='text-base font-bold place-items-center'>{item.price}</p>
                                                <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                            </div>
                                        </div>
                                    </UpdateFollower>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeData.id}
                                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6, ease: easeInOut }}
                                exit={{ opacity: 0, scale: 0.9, y: 100, transition: { duration: 0.4 } }}
                                src={activeData.image} alt='' className='h-[400px] md:w-[320px] xl:w-[400px] object-contain' />
                        </AnimatePresence>
                    </div>
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                    <a href={`https://wa.me/+919999855239`} target="_blank" rel="noopener noreferrer">
                        <span className="text-green-500">
                        <FaWhatsapp />
                        </span>
                    </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
