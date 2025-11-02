import React from 'react';
import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiPython, SiCplusplus, SiMongodb,
  SiPostgresql, SiNextdotjs, SiExpo, SiGit, SiGithub, SiSupabase
} from "react-icons/si";

// --- ADAPTED TECH LOGOS ARRAY ---
const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", color: "#E34F26" },
  { node: <SiCss3 />, title: "CSS3", color: "#1572B6" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", color: "#38BDF8" },
  { node: <SiJavascript />, title: "JavaScript", color: "#F7DF1E" },
  { node: <SiTypescript />, title: "TypeScript", color: "#3178C6" },
  { node: <SiReact />, title: "React", color: "#61DAFB" },
  { node: <SiNodedotjs />, title: "Node.js", color: "#339933" },
  { node: <SiPython />, title: "Python", color: "#3776AB" },
  { node: <SiCplusplus />, title: "C++", color: "#00599C" },
  { node: <SiMongodb />, title: "MongoDB", color: "#47A248" },
  { node: <SiPostgresql />, title: "PostgreSQL", color: "#336791" },
  { node: <SiNextdotjs />, title: "Next.js", color: "#000000" },
  { node: <SiReact />, title: "React Native", color: "#61DAFB" },
  { node: <SiExpo />, title: "Expo", color: "#000020" },
  { node: <SiGit />, title: "Git", color: "#F05032" },
  { node: <SiGithub />, title: "GitHub", color: "#181717" },
  { node: <SiSupabase />, title: "Supabase", color: "#3ECF8E" }
];

// Helper component
const CompactTechCard = ({ node, color, title }) => (
  <div className="flex-shrink-0 flex flex-col items-center justify-start p-3 mx-4">
    <div
      className="w-14 h-14 flex items-center justify-center rounded-lg mb-2 transition-transform duration-200 hover:scale-110"
      style={{ color }}
    >
      {React.cloneElement(node, {
        size: 40, // Increased icon size
        style: { ...node.props.style, color }
      })}
    </div>

    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap text-center">
      {title}
    </div>
  </div>
);

const App = () => {
  const logosToDisplay = [...techLogos, ...techLogos];
  const animationDuration = techLogos.length * 2.5;

  return (
    <div className="bg-[#ddddf7] dark:bg-black font-sans p-4 flex flex-col items-center">

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee ${animationDuration}s linear infinite;
        }

        .blur-overlay {
          position: absolute;
          inset-y: 0;
          width: 40rem; /* Increased blur width */
          pointer-events: none;
          backdrop-filter: blur(18px); /* Stronger blur */
          -webkit-backdrop-filter: blur(18px);
        }

        .blur-overlay.left {
          left: 0;
          background: linear-gradient(to right, var(--background-color) 0%, transparent 100%);
        }

        .blur-overlay.right {
          right: 0;
          background: linear-gradient(to left, var(--background-color) 0%, transparent 100%);
        }

        .bg-\\[\\#ddddf7\\] {
          --background-color: #ddddf7;
          --background-rgb: 221, 221, 247;
        }

        .dark .dark\\:bg-black {
          --background-color: black;
          --background-rgb: 0, 0, 0;
        }

        /* Fix for dark mode contrast issues */
        .dark .marquee-track svg[style*="#000000"],
        .dark .marquee-track svg[style*="#181717"] {
          filter: invert(1) brightness(1.5);
        }
        `}
      </style>

      <div className="marquee-container w-full py-6 relative overflow-hidden">
        <div className="marquee-track flex flex-row w-fit">
          {logosToDisplay.map((tech, index) => (
            <CompactTechCard key={index} {...tech} />
          ))}
        </div>

        <div className="blur-overlay left"></div>
        <div className="blur-overlay right"></div>
      </div>
    </div>
  );
};

export default App;
