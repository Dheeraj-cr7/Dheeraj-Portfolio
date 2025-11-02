import React from 'react'

const currAge = new Date().getFullYear() - 2004
console.log(currAge)

const About = () => {
  return (
    <div className='bg-white/10 dark:bg-gray-900/70 dark:text-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] 
      transition-all duration-300 flex flex-col items-center justify-center gap-3 p-10 w-full text-xl text-left'>
      <p>
        Hey there! I’m Dheeraj Madhwani, a 21-year-old Full Stack Developer who loves building things that actually make sense (and occasionally, things that just look cool).
      </p>
      <p>
        I’m currently pursuing my B.Tech in Computer Science (IoT) at G.H. Raisoni College of Engineering, Nagpur, where I’ve spent the last few years turning caffeine and code into smart systems — from IoT-based energy monitoring projects to full-stack web apps that run smoother than my Wi-Fi on a good day.
      </p>
      <p>
        I speak fluent React, Node.js, PostgreSQL, and Tailwind, and I enjoy connecting the dots between frontend aesthetics and backend logic. I like to think of myself as a bridge between “it looks good” and “it actually works.”
      </p>
      <p>
        I’ve always believed tech should solve real problems, not just exist for the sake of buzzwords. That’s why I love experimenting, learning, and occasionally breaking things (in the name of innovation, of course).
      </p>
      <p>
        When I’m not debugging life or code, you’ll probably find me at a café, lost in thought about my next idea — or convincing myself that “one more feature” won’t break the app.
      </p>

    </div>
  )
}

export default About
