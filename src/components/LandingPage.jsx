import { motion } from 'framer-motion';
import React from 'react';
import Aman_Kumar_Resume from "../assets/Aman_Kumar_Resume.pdf"

const LandingPage = () => {
  const name = "Aman Kumar";
  const title = "Web Developer";

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: `1em` },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div data-scroll data-scroll-speed="-.3" id="home" className='w-full h-screen bg-zinc-900 pt-1 flex flex-col justify-center'>
      <div className="textstructure px-6 md:px-20 text-center">
        <div className="masker">
          <motion.div
            className="w-fit mx-auto flex items-center justify-center overflow-hidden flex-wrap"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className='uppercase text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-[1em] tracking-tighter font-["Founders Frotesk"] font-bold ml-1'
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
          className="masker"
        >
          <h1 className='uppercase text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-[1em] tracking-tighter font-["Founders Frotesk"] font-bold'>
            {title}
          </h1>
        </motion.div>
      </div>

      <div className='border-t-[1px] border-zinc-800 mt-10 md:mt-20 mx-6 md:mx-20'></div>

      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-20 mt-6 gap-4 md:gap-0 text-center'>
        <div className='px-5 py-2 border-2 border-zinc-500 rounded-full text-sm font-light cursor-pointer'>
          <a href={Aman_Kumar_Resume} download className='download-btn'>Download CV</a>
        </div>
        <div className='px-5 py-2 border-2 border-zinc-500 rounded-full text-sm font-light cursor-pointer'>
          <a href="#contacts">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
