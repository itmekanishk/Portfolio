import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Subtle static gradient orbs */}
      <div className="fixed top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="fixed bottom-20 -right-20 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
      
      {/* Simple grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;