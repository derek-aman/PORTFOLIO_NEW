import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiRender,
  SiVercel,
  SiNodedotjs,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Java", icon: <span className="text-xl font-bold">☕</span> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    title: "Other",
    skills: [{ name: "REST APIs", icon: <SiPostman /> }],
  },
];

// Entry animation
const titleVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <div  data-scroll data-scroll-section id="skills" className="w-full min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e4e9f0] px-6 py-20  text-gray-900 font-['Neue Montreal']">
      <motion.h2
        className='font-["Neue Montreal"] text-[6vw] md:text-[3vw] leading-[7vw] md:leading-[4.5vw] tracking-tight text-center  md:text-center'
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className='border-t-[1px] border-zinc-700 mt-10 md:mt-20 mx-6 md:mx-20'></div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 font-[`Neue Montreal']">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="bg-transparent flex flex-col items-center justify-center p-6 text-center"
            initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
            whileHover={{
              rotateX: -3,
              rotateY: 3,
              scale: 1.1,
              transition: { type: "spring", stiffness: 200 },
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-black">{cat.title}</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 text-4xl text-black"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="bg-black text-white p-4 rounded-full shadow-xl">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
