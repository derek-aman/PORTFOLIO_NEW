import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg.png';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div
        className={`fixed z-[999] w-full px-4 md:px-20 py-4 md:py-6 font-["Neue Montreals"] flex justify-between items-center transition-transform duration-500 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }  bg-opacity-70 backdrop-blur-md`}
      >
        
        <div className="logo">
          <img src={logo} alt="Logo" className="h-12 md:h-20 w-auto object-contain" />
        </div>

        
        <div className="hidden md:flex gap-6 md:gap-10">
          {["Home", "About", "Skills", "Projects", "Contacts"].map((text, i) => (
            <a
              key={i}
              href={`#${text.toLowerCase()}`}
              className="text-sm md:text-md font-light cursor-pointer relative group text-white"
            >
              {text}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

      
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

   
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center gap-6 py-6 z-[998] md:hidden transition-all duration-500">
          {["Home", "About", "Skills", "Projects", "Contacts"].map((text, i) => (
            <a
              key={i}
              href={`#${text.toLowerCase()}`}
              className="text-white text-lg font-light"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
