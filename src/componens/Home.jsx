import React from 'react';
import GlareHover from '../assets/GlareHover'
import Magnet from '../assets/Magnet'
import profileImg from '../assets/f3.jpeg'
import LogoLoop from '../assets/LogoLoop'
import { Link } from 'react-router-dom'
import resume from '../assets/resume/DheerajMadhwani_10_Resume.pdf'
import Contact from './Contact'
import Project from './Project'
import About from './About'


// Social Icons (kept for completeness)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" fill="currentColor"
    className="h-6 w-6">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.2-.9.1-.9.1-.9 1.3.1 2 1.3 2 1.3 1.2 2 3.3 1.4 4.1 1 .1-.9.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.9 1.2 2 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6A11.6 11.6 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" fill="currentColor"
    className="h-6 w-6">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.6v1.7h.1c.5-.9 1.8-1.8 3.5-1.8C20 8.9 21 11 21 14.3V21h-4v-6.3c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z" />
  </svg>
)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" fill="currentColor"
    className="h-6 w-6">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11.001 5.5 5.5 0 0 0 0-11.001zm0 2a3.5 3.5 0 1 1 0 7.001 3.5 3.5 0 0 1 0-7.001zM17.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
)
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" fill="currentColor"
    className="h-5 w-5 text-red-500">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
  </svg>
)

const Home = () => {
  return (
    <>
      {/* MODIFIED: Increased pt-16 to pt-24 to correctly offset ALL content below the fixed Navbar. */}
      <div className="pt-24 pb-10 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto font-roboto">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10'>
          <div className="lg:col-span-1 flex justify-center w-full">
            <div
              id='card'
              className="relative bg-white/10 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)]
                hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300 flex flex-col items-center px-8 py-9 w-full max-w-sm text-center"
            >

              {/* Profile Image */}
              <img
                src={profileImg}
                alt="Profile"
                className="h-36 w-36 sm:h-40 sm:w-40 rounded-full border border-white/20 shadow-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              />

              {/* Name + Role */}
              <div className="mt-5 space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Dheeraj Madhwani</h1>
                <p className="text-gray-900 dark:text-gray-400 text-base sm:text-lg">Full Stack Developer</p>
                <p className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-400 mt-1 text-sm sm:text-base">
                  <LocationIcon /> Nagpur, India
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 mt-5">
                <a href="https://github.com/Dheeraj-cr7" target="_blank" rel="noreferrer"
                  className="hover:text-blue-500 dark:text-white dark:hover:text-blue-500 transition"
                  aria-label="GitHub Profile">
                  <GithubIcon />
                </a>
                <a href="https://linkedin.com/in/dheerajmadhwani" target="_blank" rel="noreferrer"
                  className="hover:text-blue-500 dark:text-white dark:hover:text-blue-500 transition"
                  aria-label="LinkedIn Profile">
                  <LinkedinIcon />
                </a>
                <a href="https://instagram.com/dheeraj_madhwani30" target="_blank" rel="noreferrer"
                  className="hover:text-blue-500 dark:text-white dark:hover:text-blue-500 transition"
                  aria-label="Instagram Profile">
                  <InstagramIcon />
                </a>
              </div>

              {/* Description + Resume */}
              <div className="mt-6 text-center text-gray-800 dark:text-gray-200 space-y-4">
                <p className="text-base sm:text-lg leading-snug">Crafting modern, scalable and optimized applications.</p>

                <a download="Dheeraj_Madhwani_Resume" href={resume}>
                  <Magnet padding={20} magnetStrength={5}>
                    <button className="px-5 py-2 mt-5 bg-gray-700 
                      rounded-lg font-semibold text-white shadow-md hover:scale-105 transition">
                      Download Resume
                    </button>
                  </Magnet>
                </a>
              </div>

              {/* Contact Button */}
              <div className="mt-6 text-center">
                <p className="font-semibold mb-3 text-lg dark:text-white">Want to work together?</p>
                <GlareHover
                  glareColor="#2196F3"
                  glareOpacity={0.5}
                  glareAngle={-45}
                  glareSize={200}
                  transitionDuration={250}
                  playOnce={false}
                >
                  <div className="inline-block">
                    <Link to="/contact">
                      <button className="px-5 py-2 rounded-lg font-semibold text-white bg-gray-700 hover:bg-gray-600 transition">
                        Get in Touch
                      </button>
                    </Link>
                  </div>
                </GlareHover>
              </div>
            </div>
          </div>

          {/* Column 2: Right Data Section (About) */}
          <div className='lg:col-span-2 w-full'>
            <div className='bg-white/10 dark:bg-gray-900/70 dark:text-white backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] 
              transition-all duration-300 flex flex-col items-start h-full justify-center gap-3 p-8 sm:p-10 w-full text-xl text-left'>
              <About />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections: Full width for design consistency (like the LogoLoop) */}
      <div className='w-full'>
        <section
          id="technologies"
          className="mt-4 mb-3 py-10 bg-[#ddddf7] dark:bg-black rounded-none md:rounded-3xl flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black dark:text-white mb-10 underline underline-offset-4 transition-all duration-300">
            Technologies
          </h2>
          <LogoLoop />
        </section>

        <Project />
        <Contact />
      </div>
    </>
  )
}

export default Home