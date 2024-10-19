import React from 'react'
import HighLight from './HighLight'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  const myProjects = [
    {
      gif: "https://picsum.photos/seed/project2/300/200",
      title: "ZeroByte Wallet",
      from_to_date: "Oct 2024 - Present",
      description: "A privacy-focused Solana wallet for anonymous transactions, offering easy integration and simplified Web3 payments.",
      keywords: ["Vite", "React", "Tailwind CSS", "Clerk", "Solana SDK"],
      web: "https://wallet.0byte.tech/",
      repo: "https://github.com/zr0byte/zerobyte-wallet"
    },
    {
      gif: "https://picsum.photos/seed/project1/300/200",
      title: "ZeroByte",
      from_to_date: "Sep 2024 - Present",
      description: "ZeroByte is a blockchain platform that enables private, secure, and fast cryptocurrency transactions, preserving user anonymity in digital finance.",
      keywords: ["Vite","React", "Tailwind CSS", "Solana SDK", "zkSNARK", "Anchor"],
      web: "https://dev.0byte.tech/",
      repo: "https://github.com/zr0byte/zerobyte/"
    },
    {
      gif: "https://picsum.photos/seed/project3/300/200",
      title: "Your To-do App v2",
      from_to_date: "Aug 2024 - Present",
      description: "A revamped task management app built with Next.js 14, React, and enhanced UI using Tailwind CSS, Shadcn UI, and Magic UI.",
      keywords: ["Next.js 14","React", "Tailwind CSS"],
      web: "",
      repo: "https://github.com/sidpan2011/your-todo-v2"
    },
    {
      gif: "https://picsum.photos/seed/project3/300/200",
      title: "Your To-do App v1",
      from_to_date: "Mar 2024 - Apr 2024",
      description: "A simple UI friendly todo app, you can create, edit, pin to top and mark as done and more using React, CSS and Redux.",
      keywords: ["Vite","React", "CSS", "Redux"],
      web: "https://yourto-do.netlify.app/",
      repo: "https://github.com/sidpan2011/your-todo"
    },
    {
      gif: "https://picsum.photos/seed/project4/300/200",
      title: "Typing Master",
      from_to_date: "Jun 2023 - Aug 2023",
      description: "A minimalist game to improve typing speed, offering detailed performance analysis (WPM, accuracy, errors) with a user-friendly interface.",
      keywords: ["JavaScript", "CSS", "Web3.js"],
      web: "https://typing-master0.netlify.app/",
      repo: "https://github.com/sidpan2011/Typing-Master"
    },
    {
      gif: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      from_to_date: "",
      description: "More cool projects are on the way.",
      keywords: [],
      web: "",
      repo: ""
    }
  ]
  return (
    <div className='my-8'>
      <HighLight text={"My Projects"} />
      <h1 className='mt-8 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Check out my latest work</h1>
      <div className='max-w-lg text-center mx-auto my-3'>
        <p className='text-xl dark:text-white/50 text-black/50 font-light'>Explore a selection of my best web projects, ranging from sleek websites to complex applications.</p>
      </div>
      {/* This will contain the projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        {myProjects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects