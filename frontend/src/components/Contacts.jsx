import React from 'react';
import logo from "../assets/logo.svg.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { IoMdMail } from "react-icons/io";

const Contacts = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".02" id="contacts" className='w-full p-6 md:p-20 bg-[#282c34] rounded-tl-3xl text-white'>
      <h1 className='font-["Neue Montreal"] text-[7vw] md:text-[4vw] leading-[7vw] md:leading-[4.5vw]  text-center md:text-left'>
        CONTACT
      </h1>

      <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] border-[#fbfeff] mt-10 md:mt-20'>

       
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className="flex items-center gap-6 opacity-80">
          
            <div className="flex flex-col gap-4 text-3xl text-white">
            <a href="https://www.linkedin.com" className="hover:text-[#00d8ff] transition duration-300 ease-in-out">
            <IoMdMail />
            </a>
              <a href="https://www.linkedin.com/in/aman-kumar-2857a2309/" className="hover:text-[#00d8ff] transition duration-300 ease-in-out">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/amankumar2934?igsh=eTEwdHJybHFsNjJ6" className="hover:text-[#00d8ff] transition duration-300 ease-in-out">
                <RiInstagramFill />
              </a>
              <a href="https://github.com/derek-aman" className="hover:text-[#00d8ff] transition duration-300 ease-in-out">
                <FaGithub />
              </a>
              <a href="https://x.com/aman14723102" className="hover:text-[#00d8ff] transition duration-300 ease-in-out">
                <FaTwitter />
              </a>
            </div>

         
            <img src={logo} alt="Logo" className="w-3/4 md:w-2/3 object-contain opacity-50" />
          </div>
        </div>

       
        <div className='w-full md:w-1/2 px-4 md:px-8 py-6'>
        <form 
  action="https://formsubmit.co/amanwork.co.in@gmail.com"
  method="POST"
  className="flex flex-col space-y-4 mt-10 md:mt-20"
>
 
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />
  <input type="hidden" name="_subject" value="New Contact Form Submission!" />

  <input
    type="text"
    name="name"
    required
    placeholder="Enter your name"
    className="bg-transparent border border-gray-900 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d8ff] text-white"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Enter your email"
    className="bg-transparent border border-gray-900 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d8ff] text-white"
  />
  <textarea
    name="message"
    rows="4"
    required
    placeholder="Write your message"
    className="bg-transparent border border-gray-900 px-4 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00d8ff] text-white"
  ></textarea>

  <button
    type="submit"
    className="text-white font-semibold px-6 py-3 mt-4 rounded-full transition inline-flex items-center gap-2 w-fit bg-[#00d8ff] hover:bg-[#00c1cc] focus:outline-none"
  >
    SEND <span>→</span>
  </button>
</form>

        </div>

      </div>
    </div>
  );
};

export default Contacts;
