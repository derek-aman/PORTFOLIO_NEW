import React from 'react'
import profileImage from "../assets/about_profile.jpg"

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" id="about" className='w-full p-20 bg-[#BAC4C8] rounded-tl-3xl text-black'>
        <h1 className='font-["Neue Montreal"] text-[3vw] leading-[4.5vw] tracking-tight'>
          MERN Stack Developer | Specializing in Scalable Web Applications
        </h1>
        
        <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] border-[#fbfeff] mt-20'>
        
          <div
            className="w-full md:w-1/2 h-[60vh]  rounded-3xl mt-14"
            style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
          >
          </div>
          
          <div className="w-full md:w-1/2 px-8 py-6">
            <h1 className="text-[7vw] text-center font-['Neue Montreal'] text-[6vw] md:text-[4vw] leading-[7vw] md:leading-[4.5vw]   mb-6">ABOUT</h1>
            
            <p className="text-[3vw] md:text-[1.3vw] text-center mb-4 leading-[2.5] md:leading-[2.5]">
              I'm a passionate web developer with a strong focus on creating intuitive and performant user experiences. 
              With several years of experience in the field, I've worked on a variety of projects ranging from small business 
              websites to complex web applications.
            </p>
            
            <p className="text-[3vw] md:text-[1.3vw] text-center leading-[2.5] md:leading-[2.5]">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or 
              enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
        </div>
    </div> 
  )
}

export default About;
