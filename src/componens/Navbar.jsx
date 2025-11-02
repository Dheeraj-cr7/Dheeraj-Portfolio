import Magnet from '../assets/Magnet'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="font-bold relative transition-all duration-300 text-3xl px-9 top-[25px] z-10  max-w-[80vw] m-auto ">
      <nav className="flex items-center justify-between max-w-[65vw] m-auto 
                rounded-3xl px-4 py-2
                text-black dark:text-white transition-colors duration-100
                border border-solid border-black dark:border-white">
        
        {/* Left - Logo */}
        <div id="start-cont" 
             className="rounded-full p-2 cursor-pointer transition-all duration-200">
          <Link to="/">DM</Link>
        </div>
      
        {/* Middle - Nav Links */}
        <div id="middle-cont" 
             className="flex gap-6 items-center justify-center transition-all duration-200">
          <Magnet padding={3} disabled={false} magnetStrength={2}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 text-[14px] p-1 rounded-2xl transition-all 
                  ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-800 hover:text-white"}`
              }>
              HOME
            </NavLink>
          </Magnet>
          <Magnet padding={3} disabled={false} magnetStrength={2}>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 text-[14px] p-1 rounded-2xl transition-all 
                ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-800 hover:text-white"}`
              }>
              ABOUT
            </NavLink>
          </Magnet>
          <Magnet padding={3} disabled={false} magnetStrength={2}>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `px-4 text-[14px] p-1 rounded-2xl transition-all 
                ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-800 hover:text-white"}`
              }>
              PROJECTS
            </NavLink>
          </Magnet>
          <Magnet padding={3} disabled={false} magnetStrength={2}>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 text-[14px] p-1 rounded-2xl transition-all 
                ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"}`
              }>
              CONTACT
            </NavLink>
          </Magnet>
              



        </div>

        {/* Right - Button */}
        <div id="end-cont" className="transition-all duration-200">
          <Link to="/contact">
            <button 
              className="py-1 px-3 hover:bg-gray-700 hover:text-white rounded-2xl text-[14px] transition-all">
              Let’s Connect 👋
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
