import React, { useState, useEffect } from "react";
import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiPython, SiCplusplus, SiMongodb,
  SiPostgresql, SiNextdotjs, SiExpo, SiGit, SiGithub, SiSupabase
} from "react-icons/si";

const techLogos = [
  { icon: SiHtml5, title: "HTML5", light: "#E34F26", dark: "#E34F26" },
  { icon: SiCss3, title: "CSS3", light: "#1572B6", dark: "#1572B6" },
  { icon: SiTailwindcss, title: "Tailwind CSS", light: "#38BDF8", dark: "#38BDF8" },
  { icon: SiJavascript, title: "JavaScript", light: "#F7DF1E", dark: "#F7DF1E" },
  { icon: SiTypescript, title: "TypeScript", light: "#3178C6", dark: "#3178C6" },
  { icon: SiReact, title: "React", light: "#61DAFB", dark: "#61DAFB" },
  { icon: SiNodedotjs, title: "Node.js", light: "#339933", dark: "#339933" },
  { icon: SiPython, title: "Python", light: "#3776AB", dark: "#3776AB" },
  { icon: SiCplusplus, title: "C++", light: "#00599C", dark: "#00599C" },
  { icon: SiPostgresql, title: "PostgreSQL", light: "#336791", dark: "#336791" },
  { icon: SiMongodb, title: "MongoDB", light: "#47A248", dark: "#47A248" },
  { icon: SiNextdotjs, title: "Next.js", light: "#000000", dark: "#FFFFFF" },
  { icon: SiReact, title: "React Native", light: "#61DAFB", dark: "#61DAFB" },
  { icon: SiExpo, title: "Expo", light: "#000020", dark: "#FFFFFF" },
  { icon: SiGit, title: "Git", light: "#F05032", dark: "#F05032" },
  { icon: SiGithub, title: "GitHub", light: "#000000", dark: "#FFFFFF" },
  { icon: SiSupabase, title: "Supabase", light: "#3ECF8E", dark: "#3ECF8E" }
];

const CompactTechCard = ({ icon: Icon, title, light, dark }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  const color = isDark ? dark : light;

  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-start px-3 sm:px-5">
      <div
        className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center rounded-xl mb-2 transition-transform duration-300 hover:scale-110"
      >
        <Icon size={50} color={color} />
      </div>
      <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};

const LogoLoop = () => {
  const logosToDisplay = [...techLogos, ...techLogos];
  const animationDuration = techLogos.length * 3;

  return (
    <div className="bg-[#ddddf7] dark:bg-black font-sans py-6 sm:py-8 relative overflow-hidden w-full">
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee ${animationDuration}s linear infinite;
        }
        .blur-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 10vw;
          pointer-events: none;
          z-index: 10;
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
        }
        .dark .dark\\:bg-black {
          --background-color: black;
        }
        `}
      </style>

      <div className="marquee-container w-full flex items-center">
        <div className="marquee-track">
          {logosToDisplay.map((tech, i) => (
            <CompactTechCard key={i} {...tech} />
          ))}
        </div>
        <div className="blur-overlay left"></div>
        <div className="blur-overlay right"></div>
      </div>
    </div>
  );
};

export default LogoLoop;
