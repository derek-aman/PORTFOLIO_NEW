import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import LocomotiveScroll from 'locomotive-scroll';
import ChatWidget from './components/ChatWidget'

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='w-full min-h-screen bg-gradient-to-br from-[#f6f8fb] to-[#e4e9f0] text-white'>
      <Navbar />
      <LandingPage />
      <About />
      
      <Skills />
      <Projects />
      <Contacts />
    </div>
    <ChatWidget />
    </>
  )
}

export default App
