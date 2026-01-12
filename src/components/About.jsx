import React, { useEffect, useState } from 'react';
import profile from "../assets/profile/profile.jpg";

const ReactTypingEffect = ({
  text = [],
  speed = 100,
  eraseSpeed = 50,
  typingDelay = 500,
  eraseDelay = 2000,
  cursorRenderer,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text.length) return;

    const current = text[index % text.length];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + current.charAt(prev.length));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), eraseDelay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }, typingDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, text, speed, eraseSpeed, typingDelay, eraseDelay]);

  const cursor = cursorRenderer ? cursorRenderer('|') : <span>|</span>;

  return (
    <>
      {displayText}
      {cursor}
    </>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-16">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 leading-tight">
            Kanishk Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-300 leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Coder',
                'Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-gray-300">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black bg-gradient-to-r from-white to-gray-300 py-3 px-8 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-white/30 hover:scale-105"
          >
            DOWNLOAD Resume
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem]">
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
            
            {/* Image */}
            <img
              src={profile}
              alt="Kanishk"
              className="relative w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl shadow-black/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;