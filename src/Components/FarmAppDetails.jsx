import React, { useState, useEffect } from 'react';
// import Footer from './Footer'
import { Leaf, Cpu, BarChart3, Sun, Moon, Zap, ShieldCheck, Home, Folder, Mail, ArrowRight, Github, Linkedin, ArrowDown } from 'lucide-react';
// Import images
import img1 from "../assets/farmAppImgs/1.png";
import img2 from "../assets/farmAppImgs/2.png";
import img3 from "../assets/farmAppImgs/3.png";
import img4 from "../assets/farmAppImgs/4.png";
import img5 from "../assets/farmAppImgs/5.png";
import img6 from "../assets/farmAppImgs/6.png";
import img7 from "../assets/farmAppImgs/7.jpeg";
import img8 from "../assets/farmAppImgs/8.png";
import img9 from "../assets/farmAppImgs/9.png";


const screens = [
  { id: 1, label: "Create Account", img: img1, workflowTitle: "Onboarding" },
  { id: 2, label: "Login", img: img2, workflowTitle: "Access" },
  { id: 3, label: "Farm Setup", img: img3, workflowTitle: "Configuration" },
  { id: 4, label: "Dashboard", img: img4, workflowTitle: "Overview" },
  { id: 5, label: "Farm Overview", img: img5, workflowTitle: "Plots" },
  { id: 6, label: "Sensor Data", img: img6, workflowTitle: "Sensors" },
  { id: 7, label: "AI Prediction", img: img7, workflowTitle: "Prediction" },
  { id: 8, label: "History", img: img8, workflowTitle: "History" },
  { id: 9, label: "Profile", img: img9, workflowTitle: "Settings" },
];

// --- Responsive Flowchart Component (Optimized for MD breakpoint for vertical split) ---
const ResponsiveFlowchart = ({ screens }) => {
  const [activeScreen, setActiveScreen] = useState(screens[0]);

  return (
    // Base is Mobile (flex-col, steps then image). MD+ is Tablet/Desktop (flex-row, steps left, image right).
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#d3d3fd] backdrop-blur-lg rounded-xl w-full p-4 dark:bg-gray-900 text-black dark:text-white border border-slate-700 shadow-2xl">

      {/* 1. Flowchart Steps Container */}
      {/* Mobile: Horizontal, flex-wrap. MD+: Vertical, space-y-4 */}
      <div className="w-full md:w-2/3 flex flex-wrap md:flex-col items-center border-t-2 border-r-0 sm:border-r-2 sm:border-t-0 border-teal-400/50 justify-center md:items-start space-x-2 md:space-x-0 space-y-2 md:space-y-4 p-2 md:p-8 order-2 md:order-1">

        {/* Title for Tablet/Desktop Screens */}
        {/* <h4 className="hidden md:block text-xl font-bold dark:text-white mb-4 border-b border-teal-400/50 w-full pb-1">App Flow Steps</h4>
         */}
        {screens.map((s, i) => (
          <React.Fragment key={s.id}>
            <div
              className={`flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-300 text-left w-auto min-w-min 
                ${activeScreen.id === s.id
                  ? 'bg-teal-600/70 dark:bg-gray-600 text-white dark:text-white shadow-lg border border-teal-500'
                  : 'bg-slate-700/50 text-gray-900 dark:text-gray-500 hover:bg-slate-600/70 border border-slate-700'
                }
                md:w-full /* Steps take full width in vertical layout (MD+) */
                `}
              onMouseEnter={() => setActiveScreen(s)}
              onTouchStart={() => setActiveScreen(s)} // For touch devices
            >
              <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
                {s.id}. {s.workflowTitle}
              </span>
            </div>
            {/* Separator Logic: ArrowRight for horizontal (Mobile), ArrowDown for vertical (MD+) */}
            {i < screens.length - 1 && (
              <div className='flex justify-center items-center'>
                {/* Horizontal Separator (Mobile) - Used for flex-wrap separation */}
                <ArrowRight className="w-4 h-4 text-slate-600 block md:hidden" />
                {/* Vertical Separator (Tablet/Desktop) */}
                <ArrowDown className="w-5 h-5 text-center text-slate-600 hidden md:block ml-3" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 2. Screen Image Preview (Centered on all devices) */}
      <div className="w-full md:w-1/3 flex items-center justify-center p-4 order-1 md:order-2 mb-6 md:mb-0">
        <div className="w-full max-w-sm h-72 md:h-[36rem] lg:h-[40rem] p-4 rounded-lg flex items-center justify-center relative overflow-hidden bg-transparent border border-slate-800">
          {/* <div className="absolute top-2 left-2 right-2 p-2 bg-black/50 text-white text-center rounded-t-lg text-sm font-mono z-10">
            {activeScreen.id}. {activeScreen.workflowTitle}: {activeScreen.label}
          </div> */}
          <img
            src={activeScreen.img}
            alt={activeScreen.label}
            className="max-h-full max-w-full object-contain rounded-xl shadow-xl transition-all duration-500 transform scale-[0.98]"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/240x500/1e293b/ffffff?text=Screen+Not+Loaded" }}
          />
        </div>
      </div>
    </div>
  );
};

// --- Main App Component (Updated to use ResponsiveFlowchart) ---

export default function FarmAppDetails() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme Logic: Force Dark Mode by default for the minimal design
  useEffect(() => {
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const sectionTitleStyle = 'text-3xl md:text-4xl font-extrabold mb-6 border-b-2 border-teal-400/50 pb-2 inline-block';

  return (
    <div className={`min-h-screen font-roboto transition-colors duration-500 bg-[#ddddf7] text-black dark:bg-black dark:text-white`}>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8">

        {/* Project Title Header */}
        <header className="text-center my-6">
          <h2 id="projects" className="text-5xl font-bold mb-2 ">
            Smart Farming Mobile App
          </h2>
        </header>
        <div className="w-16 h-1 mx-auto bg-teal-400 mb-6"></div>

        {/* Project Details Section */}
        <div className={`p-8 md:p-12 mb-16 rounded-xl bg-[#d3d3fd] text-black border border-slate-700 dark:bg-gray-900 dark:text-white`}>

          {/* 1. Problem Statement */}
          <section className="mb-12">
            <h3 className={sectionTitleStyle}>Problem Statement</h3>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-4 font-semibold">
              Traditional farming methods face critical challenges:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-[#ddddf7] dark:bg-gray-600 border border-red-500/30 dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">Inefficient Resource Use</h4>
                <p className="text-sm text-gray-900 dark:text-gray-200/100">Over-irrigation and blanket fertilization lead to significant water wastage and soil degradation.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#ddddf7] dark:bg-gray-600 border border-red-500/30 dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">Delayed Diagnostics</h4>
                <p className="text-sm text-gray-900 dark:text-gray-200/100">Issues like pests or nutrient deficiencies are often identified too late, causing irreversible crop damage and yield loss.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#ddddf7] dark:bg-gray-600 border border-red-500/30 dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">Lack of Data-Driven Decisions</h4>
                <p className="text-sm text-gray-900 dark:text-gray-200/100">Farmers rely on guesswork, preventing optimization for specific micro-climates and soil conditions.</p>
              </div>
            </div>
          </section>

          {/* 2. What Our App Solves */}
          <section className="mb-12">
            <h3 className={sectionTitleStyle}>Solution & Project Details</h3>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-4 font-semibold">
              We provide a unified, AI-driven platform for precision agriculture:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-3">
                <h4 className="text-xl font-bold text-black dark:text-white flex items-center mb-2"><Leaf className="w-6 h-6 mr-2 text-green-500" /> Core Technology</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-200/100 text-sm">
                  <li>IoT Sensor Integration: Real-time data input from field sensors measuring NPK, pH, and soil moisture.</li>
                  <li>Machine Learning Core: Uses location, climate, and historical data for predictive crop health modeling.</li>
                  <li>Mobile-First Design: Intuitive, responsive interface for easy use in the field.</li>
                </ul>
              </div>
              <div className="space-y-4 p-3">
                <h4 className="text-xl font-bold text-black dark:text-white flex items-center mb-2"><BarChart3 className="w-6 h-6 mr-2 text-green-500" /> Key Features (Detailed)</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-200/100 text-sm">
                  <li>Multi-Plot Management: Manage different crop cycles and soil types across multiple farm plots simultaneously.</li>
                  <li>Climate Auto-Populate: Automatically fetches and inputs local climate data upon farm location setup.</li>
                  <li>Health Prediction History: Stores a log of all predictions, root causes, and sensor readings for regulatory compliance and review.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* 4. Responsive Flowchart Section */}
        <section className="mb-24">
          <h2 className={`text-4xl font-extrabold mb-6 text-center text-black dark:text-white`}>
            App Workflow
          </h2>
          <div className="w-16 h-1 mx-auto bg-teal-400 mb-6"></div>
          <ResponsiveFlowchart screens={screens} />
        </section>

      </div>

      {/* 5. Footer (Minimalist Dark Style) */}
      {/* <Footer /> */}
    </div>
  );
}