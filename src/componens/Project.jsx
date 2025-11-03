import React from "react";
import img from "../assets/dot.jpg";

const projects = [
  { title: "Smart Farming", img: img, desc: "IoT sensors for precision farming." },
  { title: "Netflix Clone", img: img, desc: "Full-featured movie platform." },
  { title: "DoneZo", img: img, desc: "Task Management basic." },
];

const Project = () => {
  return (
    <section className="py-14 px-5 sm:px-10 bg-[#ddddf7] dark:bg-black w-full flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold underline mb-10 dark:text-white">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative w-full rounded-3xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
          >
            {/* Project Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Always visible overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-5 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                {p.title}
              </h3>
              <p className="text-gray-200 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
