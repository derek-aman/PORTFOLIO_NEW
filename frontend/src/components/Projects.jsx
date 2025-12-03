import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import code_check from "../assets/code_check.png"
import HOMESTAY from "../assets/HOMESTAY.png"
import carRent from "../assets/carRent.png"
import restaurant from "../assets/restaurant.png"


const projects = [
  {
    title: "AI code checker",
    desc: "A MERN app that reviews code using Gemini APIs.",
    img: code_check,
    github: " https://github.com/derek-aman/code-check",
    live: "https://code-check-frontend.onrender.com/",
  },
  {
    title: "HOMESTAY",
    desc: "A responsive Homestay listing platform built with MERN stack, offering seamless user experience and modern UI.",
    img: HOMESTAY,
    github: "https://github.com/derek-aman/HOMESTAY",
    live: "https://homestay-374t.onrender.com/listings",
  },
  {
    title: "carRent",
    desc: "A modern and responsive car rental website frontend built with React, showcasing smooth UI, animations, and a seamless booking interface.",
    img: carRent,
    github: "https://github.com/derek-aman/carRent",
    live: "https://car-rent-tawny.vercel.app/",
  },
  {
    title: "Restaurant website",
    desc: "A modern and responsive restaurant website frontend showcasing menus, reservations, and elegant UI for a seamless dining experience.",
    img: restaurant,
    github: "https://github.com/derek-aman/Restaurant-app",
    live: "https://restaurant-app-pied-one.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" id="projects" className="w-full min-h-screen px-8 py-16 bg-transparent">
      <h2 className="text-black text-[7vw] md:text-[4vw] leading-[7vw] md:leading-[4.5vw]  text-center  md:text-center font-['Neue Montreal'] mb-12">PROJECTS</h2>
      {/* <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] border-black mt-10 md:mt-20'></div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-72 rounded-2xl overflow-hidden shadow-xl group transition-transform duration-300 hover:scale-[1.02]"
            style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-white mb-4">{project.desc}</p>
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white hover:text-green-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
