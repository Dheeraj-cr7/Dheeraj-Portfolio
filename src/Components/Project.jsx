// Components/Project.jsx

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'; // <-- NEW: Import useState, useEffect
import SkeletonProjectCard from '../assets/SkeletonProject'; // <-- NEW: Import the Skeleton
// ... (rest of imports)
import img from "../assets/dot.jpg";
import doneZo_img from "../assets/doneZo_img.png"
import prev_img from "../assets/farmAppImgs/farmAppPreviewImage.png"


const projects = [
  { title: "Smart Farming Mobile App", img: prev_img, desc: "A farmApp to get realtime updates for crop/soil productivity.", src: '/projects/farm-app-details' },
  { title: "DoneZo", img: doneZo_img, desc: "A todo webapp for task managements.", src: 'https://done-zo-six.vercel.app/' },
];


const Project = () => {
  const navigate = useNavigate();
  // 1. Initial state set to true to show skeletons immediately
  const [isLoading, setIsLoading] = useState(true);

  // 2. Simulate data fetching delay
  useEffect(() => {
    // Set a delay (e.g., 1000ms or 1 second) before showing real content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const handleProjectClick = (project) => {
    // ... (Navigation logic remains the same)
    if (project.src.startsWith('http') || project.src.startsWith('https')) {
      window.open(project.src, "_blank")
    } else {
      navigate(project.src)
    }
  }

  return (
    <section className="py-14 px-5 sm:px-10 bg-[#ddddf7] dark:bg-black w-full flex flex-col items-center">

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${(projects.length <= 2) ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 hover:cursor-pointer sm:gap-10 w-full max-w-6xl`}>

        {/* 3. Conditional Rendering */}
        {isLoading
          ? // A. Render Skeletons if loading
          projects.map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))
          : // B. Render actual projects if loaded
          projects.map((p, i) => (
            <div
              key={i}
              onClick={() => handleProjectClick(p)}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            >
              {/* ... (Your original project card content goes here) ... */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />

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