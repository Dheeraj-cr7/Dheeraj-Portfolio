import React, { useState } from "react";
import {useLocation} from 'react-router-dom'

const About = () => {
  const age = new Date().getFullYear() - 2004;
  const [showFull, setShowFull] = useState(false);

  const location = useLocation();
  const isStandAlonePage = location.pathname === "/about"

  // Short summary for mobile
  const mobileSummary = `Hey there! I’m Dheeraj Madhwani, a ${age}-year-old Full Stack Developer who loves building things that actually make sense. I’m pursuing my B.Tech in Computer Science (IoT) at G.H. Raisoni College of Engineering, Nagpur, and enjoy turning ideas into smart systems.`;

  return (
    // CLEAN FIX: The ID is set here with no extra padding (pt-XX)
    <section id="about" className={isStandAlonePage ? "pt-16 pb-10 sm:pt-12" : ""}>
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-6 flex flex-col gap-4 text-gray-800 dark:text-white text-base sm:text-lg leading-relaxed text-left">

        {/* Desktop - full content */}
        <div className="hidden sm:flex flex-col gap-4">
          <p>
            Hey there! I’m <b>Dheeraj Madhwani</b>, a {age}-year-old Full Stack Developer who loves building things that actually make sense (and occasionally, things that just look cool).
          </p>
          <p>
            I’m pursuing my B.Tech in Computer Science (IoT) at <b>G.H. Raisoni College of Engineering, Nagpur</b>, where I’ve spent the last few years turning caffeine and code into smart systems — from IoT-based energy monitoring projects to full-stack web apps that run smoother than my Wi-Fi on a good day.
          </p>
          <p>
            I speak fluent <b className="underline">React</b>, <b className="underline">Node.js</b>, <b className="underline">PostgreSQL</b> and <b className="underline">Tailwind CSS</b>, and I enjoy connecting the dots between frontend aesthetics and backend logic — bridging “it looks good” with “it actually works.”
          </p>
          <p>
            I believe tech should solve real problems, not just exist for the buzzwords. That’s why I keep experimenting, learning, and occasionally breaking things (for innovation, of course).
          </p>
          <p>
            When I’m not debugging life or code, you’ll find me at a café, lost in thought about my next idea — or convincing myself that “one more feature” won’t break the app.
          </p>
        </div>

        {/* Mobile - summary with "Read more" */}
        <div className="flex flex-col gap-4 sm:hidden">
          <p>
            {showFull ? (
              <>
                Hey there! I’m <b>Dheeraj Madhwani</b>, a {age}-year-old Full Stack Developer who loves building things that actually make sense (and occasionally, things that just look cool). I’m pursuing my B.Tech in Computer Science (IoT) at <b>G.H. Raisoni College of Engineering, Nagpur</b>, where I’ve spent the last few years turning caffeine and code into smart systems — from IoT-based energy monitoring projects to full-stack web apps that run smoother than my Wi-Fi on a good day. I speak fluent <b className="underline">React</b>, <b className="underline">Node.js</b>, <b className="underline">PostgreSQL</b>, and <b className="underline">Tailwind CSS</b>, and I enjoy connecting the dots between frontend aesthetics and backend logic — bridging “it looks good” with “it actually works.” I believe tech should solve real problems, not just exist for the buzzwords. That’s why I keep experimenting, learning, and occasionally breaking things (for innovation, of course). When I’m not debugging life or code, you’ll find me at a café, lost in thought about my next idea — or convincing myself that “one more feature” won’t break the app.
              </>
            ) : (
              mobileSummary
            )}
          </p>
          <button
            className="mt-1 text-blue-500 font-semibold self-start"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;