import GlareHover from '../assets/GlareHover'
import Magnet from '../assets/Magnet'
import profileImg from '../assets/f3.jpeg'
import { Link } from 'react-router-dom'
import resume from '../assets/resume/DheerajMadhwani_10_Resume.pdf'
import Contact from './Contact'
import Project from './Project'
import LogoLoop from '../assets/LogoLoop'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiPython, SiCplusplus, SiGit, SiGithub, } from "react-icons/si";

import About from './About'

//Technologies logos
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
];
// const techLogos = [
//   { icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
//   { icon: <SiCss3 color="#1572B6" />, name: "CSS3" },
//   { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
//   { icon: <SiReact color="#61DAFB" />, name: "React" },
//   { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
//   { icon: <SiNodedotjs color="#68A063" />, name: "Node.js" },
//   { icon: <SiExpress color="#FFFFFF" />, name: "Express.js" },
//   { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
//   { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
//   { icon: <SiPython color="#3776AB" />, name: "Python" },
//   { icon: <SiCplusplus color="#00599C" />, name: "C++" },
//   { icon: <SiGit color="#F05032" />, name: "Git" },
//   { icon: <SiGithub color="#181717" />, name: "GitHub" },
// ];

// Social Icons
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
      <div className="flex items-center gap-10 justify-stretch m-auto max-w-[70vw] min-h-[90vh] px-4 md:px-10 ">
        {/* Info Card */}
        <div
          id='card'
          className="relative bg-white/10 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)]
          hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500 flex flex-col items-center p-8 w-full max-w-sm text-center"
        >

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="h-40 w-40 rounded-full border border-white/20 shadow-lg object-cover object-center transition-transform duration-300 hover:scale-105"
          />

          {/* Name + Role */}
          <div className="mt-5 space-y-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dheeraj Madhwani</h1>
            <p className="text-gray-900 dark:text-gray-400 text-lg">Full Stack Developer</p>
            <p className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-400 mt-1">
              <LocationIcon /> Nagpur, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-5">
            <a href="https://github.com/Dheeraj-cr7" target="_blank" rel="noreferrer"
              className="hover:text-blue-500 dark:text-white transition">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/dheerajmadhwani" target="_blank" rel="noreferrer"
              className="hover:text-blue-500 dark:text-white transition">
              <LinkedinIcon />
            </a>
            <a href="https://instagram.com/dheeraj_madhwani30" target="_blank" rel="noreferrer"
              className="hover:text-pink-500 dark:text-white transition">
              <InstagramIcon />
            </a>
          </div>

          {/* Description + Resume */}
          <div className="mt-6 text-center text-gray-800 dark:text-gray-200 space-y-4">
            <p className="text-lg leading-snug">Crafting modern, scalable and optimized applications.</p>

            <a download="Dheeraj_Madhwani_Resume" href={resume}>
              <Magnet padding={20} magnetStrength={5}>
                <button className="px-5 py-2 bg-gradient-to-r mt-2 from-blue-400 to-purple-600 
                  rounded-lg font-semibold text-white shadow-md hover:scale-105 transition">
                  Download Resume
                </button>
              </Magnet>
            </a>
          </div>

          {/* Contact Button */}
          {/* <div className="mt-6">
            <p className="font-semibold text-lg dark:text-white">Want to work together?</p>
            <GlareHover glareColor="#2196F3" glareOpacity={0.3} glareAngle={-30} glareSize={200}>
              <Link to='/contact'>
                <button className="px-5 py-2 mt-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-gray-800 shadow-md hover:scale-105 transition">
                  Get in Touch
                </button>
              </Link>
            </GlareHover>
          </div> */}
          <div className="mt-6 text-center">
            <p className="font-semibold text-lg dark:text-white">Want to work together?</p>
            <GlareHover glareColor="#2196F3" glareOpacity={0.3} glareAngle={-30} glareSize={200}>
              <div className="inline-block">
                <Link to="/contact">
                  <button className="px-5 py-2 mt-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-gray-900 shadow-md hover:scale-105 transition-transform duration-300">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </GlareHover>
          </div>

        </div>

        {/* Right Data Section (keep or replace later) */}
        <div>
          <About />
        </div>


      </div>
      <div>
        <section id="technologies" className="my-6 py-10 bg-white/10 dark:bg-black">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-8 underline underline-offset-4">
            Technologies
          </h2>

          <div className="relative w-full h-[140px] overflow-hidden hover:cursor-pointer">
            <LogoLoop
              logos={techLogos.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-4xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:scale-125 transition-transform duration-300"
                  title={tech.title}
                >
                  {tech.node}
                </div>
              ))}
              speed={130}
              direction="left"
              logoHeight={60}
              gap={40}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#00000080"
            />
          </div>
        </section>


        <Project />
        <Contact />
      </div>
    </>
  )
}

export default Home
