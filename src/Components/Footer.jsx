import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioFooter = () => {
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
  const date = new Date()
  return (
    // Main container with dark background
    <footer className="w-full bg-gray-900 relative bottom-0 z-10 text-white pt-16 pb-6 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Branding, Links, and Social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">

          {/* Column 1 & 2: Branding and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-3">Dheeraj</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Building seamless web and mobile experiences as a Full-Stack Developer.
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Projects</NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div className="col-span-1 flex justify-start md:justify-end items-start">
            <div className="flex space-x-6">
              <a href="https://github.com/Dheeraj-cr7" target="_blank" rel="noreferrer"
                className="hover:text-blue-500 dark:text-white dark:hover:text-blue-500 transition">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/dheerajmadhwani" target="_blank" rel="noreferrer"
                className="hover:text-blue-500 dark:text-white dark:hover:text-blue-500 transition">
                <LinkedinIcon />
              </a>
              <a href="https://instagram.com/dheeraj_madhwani30" target="_blank" rel="noreferrer"
                className="hover:text-blue-500 dark:text-white dark:hover:text-blue-500 transition">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
          {/* Copyright text aligned to the left */}
          <p className="order-2 md:order-1 mt-4 md:mt-0">© {date.getFullYear()} Dheeraj. All rights reserved.</p>

          {/* Placeholder for the "Activate Windows" text (removed for clarity, replaced with a small branding link) */}
          <p className="order-1 md:order-2 text-gray-700 hover:text-gray-500 transition-colors">
            <a href="#" className="text-gray-700 hover:text-gray-500 transition-colors">
              Built with React and Tailwind
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
