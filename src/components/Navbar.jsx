import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed z-[999] w-full px-20 py-6 font-["Neue Montreals"] flex justify-between items-center transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="logo">
        <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
      </div>
      <div className="links flex gap-10">
        {["Home", "About", "Skills", "Projects", "Contacts"].map((text, i) => (
          <a
            key={i}
            href={`#${text.toLowerCase()}`} // Linking to corresponding section ID
            className="text-md font-light cursor-pointer relative group text-"
          >
            {text}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-whitw transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
