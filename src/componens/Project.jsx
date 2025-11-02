import React from "react";
import img from '../assets/dot.jpg'

const projects = [
  { title: "Smart Farming", img: img, desc: "IoT sensors for precision farming." },
  { title: "Netflix Clone", img: img, desc: "Full-featured movie platform." },
  { title: "DoneZo", img: img, desc: "Task Management basic." },
];

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#ddddf7] dark:bg-green-300 py-3 px-6">
      <h2 className="text-center text-4xl underline font-bold mb-10 dark:text-white">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto justify-items-center">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="group border border-white relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl max-w-sm w-full transition-all"
          >
            <img 
              src={p.img} 
              alt={p.title} 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 className="text-2xl font-bold text-white">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
