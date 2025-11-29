import Magnet from '../assets/Magnet'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="font-bold sticky top-5 z-10 px-3 sm:px-6">
      <nav className="flex items-center justify-between flex-wrap backdrop-blur-lg rounded-2xl px-3 sm:px-6 py-1 sm:py-2 text-black dark:text-white transition-colors duration-100 border border-solid border-black dark:border-white max-w-4xl mx-auto">

        {/* Logo */}
        <div id="start-cont" className="rounded-full p-1 sm:p-2 cursor-pointer transition-all duration-200">
          <Link to="/" className="text-lg sm:text-xl md:text-2xl">DM</Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>

        {/* Nav Links */}
        <div className={`w-full sm:flex sm:items-center sm:w-auto ${isOpen ? "block" : "hidden"} mt-2 sm:mt-0`}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
            {["/", "/about", "/projects", "/contact"].map((path, i) => (
              <Magnet key={i} padding={2} disabled={false} magnetStrength={1.5}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-3 py-1 text-[13px] sm:text-[14px] rounded-xl transition-all ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  {path === "/" ? "HOME" : path.slice(1).toUpperCase()}
                </NavLink>
              </Magnet>
            ))}

            {/* Theme toggle inside mobile menu only */}
            <button
              onClick={toggleTheme}
              className="mt-2 py-1 px-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-[13px] sm:hidden"
            >
              🌙 / ☀️
            </button>
          </div>
        </div>

        {/* Right button for desktop */}
        <div id="end-cont" className="hidden sm:block transition-all duration-200">
          <Link to="/contact">
            <button className="py-1 px-2 sm:py-1 sm:px-3 hover:bg-gray-700 hover:text-white rounded-xl text-[13px] sm:text-[14px] transition-all">
              Let’s Connect 👋
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
