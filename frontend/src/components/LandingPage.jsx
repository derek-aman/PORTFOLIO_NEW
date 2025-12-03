import { motion } from 'framer-motion';
import React from 'react';
import Aman_Kumar_Resume from "../assets/Aman_Kumar_Resume.pdf";

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
    <div
      data-scroll
      data-scroll-speed="-.3"
      id="home"
      className="w-full min-h-screen bg-zinc-900 pt-1 flex flex-col justify-center"
    >
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
          className="masker mt-4"
        >
          <h1 className='uppercase text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[7vw] leading-[1em] tracking-tighter font-["Founders Frotesk"] font-bold'>
            {title}
          </h1>
        </motion.div>
      </div>

      <div className="w-full px-6 md:px-20 mt-32">
        <div className='border-t border-zinc-700 w-full max-w-6xl mx-auto'></div>
      </div>

      <div className="w-full px-6 md:px-20 mt-10">
        <div className="flex justify-center sm:justify-between items-center max-w-6xl mx-auto flex-wrap gap-4">
          <a
            href={Aman_Kumar_Resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-zinc-500 text-white rounded-full text-sm font-light hover:bg-zinc-800 transition"
          >
            Download CV
          </a>
          <a
            href="#contacts"
            className="px-6 py-2 border-2 border-zinc-500 text-white rounded-full text-sm font-light hover:bg-zinc-800 transition"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
