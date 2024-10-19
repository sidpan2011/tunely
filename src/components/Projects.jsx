import React from 'react'
import HighLight from './HighLight'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  const myProjects = [
    {
      gif: "https://picsum.photos/seed/project1/300/200",
      title: "E-commerce Platform",
      from_to_date: "Jan 2023 - Mar 2023",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      keywords: ["React", "Node.js", "MongoDB"],
      links: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      gif: "https://picsum.photos/seed/project2/300/200",
      title: "AI Chatbot",
      from_to_date: "Apr 2023 - Jun 2023",
      description: "An intelligent chatbot powered by machine learning algorithms.",
      keywords: ["Python", "TensorFlow", "NLP"],
      links: "https://github.com/yourusername/ai-chatbot"
    },
    {
      gif: "https://picsum.photos/seed/project3/300/200",
      title: "Mobile Fitness App",
      from_to_date: "Jul 2023 - Sep 2023",
      description: "A cross-platform mobile app for tracking workouts and nutrition.",
      keywords: ["React Native", "Firebase", "Redux"],
      links: "https://github.com/yourusername/fitness-app"
    },
    {
      gif: "https://picsum.photos/seed/project4/300/200",
      title: "Blockchain Voting System",
      from_to_date: "Oct 2023 - Dec 2023",
      description: "A secure and transparent voting system using blockchain technology.",
      keywords: ["Solidity", "Ethereum", "Web3.js"],
      links: "https://github.com/yourusername/blockchain-voting"
    }
  ]
  return (
    <div className='my-5'>
      <HighLight text={"My Projects"} />
      <h1 className='mt-9 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Check out my latest work</h1>
      <div className='max-w-lg text-center mx-auto my-3'>
        <p className='text-xl'>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
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