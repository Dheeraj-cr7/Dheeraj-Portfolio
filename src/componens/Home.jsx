import GlareHover from '../assets/GlareHover'
import Magnet from '../assets/Magnet'
import profileImg from '../assets/f3.jpeg'
import { Link } from 'react-router-dom'
import resume from '../assets/resume/Dheeraj_Madhwani_8-2025.pdf'

// ✅ Social SVGs inline (so they scale uniformly)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" fill="currentColor" 
    className="h-6 w-6">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.2-.9.1-.9.1-.9 1.3.1 2 1.3 2 1.3 1.2 2 3.3 1.4 4.1 1 .1-.9.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.9 1.2 2 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6A11.6 11.6 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" fill="currentColor" 
    className="h-6 w-6">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.6v1.7h.1c.5-.9 1.8-1.8 3.5-1.8C20 8.9 21 11 21 14.3V21h-4v-6.3c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" fill="currentColor" 
    className="h-6 w-6">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 1 0 0 11.001 5.5 5.5 0 0 0 0-11.001zm0 2a3.5 3.5 0 1 1 0 7.001 3.5 3.5 0 0 1 0-7.001zM17.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
  </svg>
)

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" fill="currentColor" 
    className="h-5 w-5 text-red-500">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
  </svg>
)

const Home = () => {
  return (
    <div className="flex items-center gap-10 max-w-[65vw] m-auto relative top-[25px] justify-center p-3">
      <div id='card' className="bg-white/10 dark:bg-black/30 backdrop-blur-lg 
             rounded-2xl shadow-2xl shadow-blue-300 
             dark:shadow-blue-700 hover:shadow-blue-600 
             dark:hover:shadow-blue-500 
             transition-shadow duration-700 ease-in-out p-4 
             w-full max-w-md flex flex-col items-center gap-6">
        {/* Profile Image */}
        <img 
          src={profileImg} 
          alt="Profile" 
          className="h-40 w-40 rounded-full border-[1px] border-gray-500 shadow-lg object-cover object-center hover:scale-105"
        />

        {/* Name + Info */}
        <div className="text-center font-archivo">
          <h1 className="text-3xl font-bold dark:text-white">Dheeraj Madhwani</h1>
          <p className=" mt-1 dark:text-white">Full Stack Developer</p>
          <p className="flex items-center justify-center gap-2 text-gray-400 mt-1">
            <LocationIcon /> Nagpur, India
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://github.com/Dheeraj-cr7" target="_blank" rel="noreferrer" className="hover:text-gray-600 dark:text-white dark:hover:text-gray-600 transition">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/dheerajmadhwani" target="_blank" rel="noreferrer" className="hover:text-gray-600 dark:text-white dark:hover:text-gray-600 transition">
            <LinkedinIcon />
          </a>
          <a href="https://instagram.com/dheeraj_madhwani30" target="_blank" rel="noreferrer" className="hover:text-gray-600  dark:text-white dark:hover:text-gray-600 transition">
            <InstagramIcon />
          </a>
        </div>

        {/* Extra Info */}
        <div className="text-center flex flex-col gap-4 text-gray-300 space-y-1">
          <p className=' text-2xl'>Crafting modern, responsive and scalable web applications.</p>
          <a 
            download="Dheeraj_Madhwani_Resume"
            href={resume}
            >

            <Magnet padding={20} disabled={false} magnetStrength={5}>
              <button className=" px-4 py-2 bg-gradient-to-r border-[2px] text-black font-roboto text-lg border-solid border-black from-blue-300 to-purple-600 rounded-lg shadow-md hover:scale-105 transition">
                Download Resume
              </button>
            </Magnet> 
          </a>
        </div>

        {/* Contact */}
        <div className="text-center flex flex-col gap-3 ">
          <p className="font-semibold text-lg dark:text-white">Want to work together?</p>
          <GlareHover
            glareColor=" #2196F3"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={200}
            transitionDuration={800}
            playOnce={false}
          >
            <Link to='/contact'>
              <button className="px-5 py-3 rounded-lg font-bold font-roboto shadow-md transition dark:text-white ">
                Get in touch
              </button>
            </Link>
          </GlareHover>
        </div>
      </div>
      <div id='data' className='flex justify-center items-center p-10 text-center border border-black dark:text-white dark:border-blue-500 rounded-lg w-full h-[100%]'>
        .
      </div>
    </div>
  )
}

export default Home
