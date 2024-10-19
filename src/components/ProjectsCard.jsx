import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const ProjectsCard = ({ project }) => {
    return (
        <Card className="overflow-hidden h-auto">
            <Image
                src={project.gif}
                alt={project.title}
                width={300}
                height={200}
                className="w-full object-cover h-40"
            />
            <CardHeader>
                <CardTitle className="text-md">{project.title}</CardTitle>
                <CardDescription className="text-sm dark:text-white/60 text-black/60">{project.from_to_date}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-sm dark:text-white/40 text-black/40'>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.keywords.map((keyword, index) => (
                        <Button key={index} size="xs" variant="tag" className="text-[10px] text-black dark:text-white font-medium px-2.5 py-0.5 rounded-md ">
                            {keyword}
                        </Button>
                    ))}
                </div>
            </CardContent>
            <CardFooter className='flex space-x-2'>
                {
                    project.web && <div>
                        <a href={project.web} target="_blank" rel="noopener noreferrer" className=" hover:underline">
                            <Button size="xs" className="text-[10px]">Website</Button>
                        </a>
                    </div>
                }
                {
                    project.repo && <div className=''>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="">
                            <Button size="xs" className="text-[10px]">GitHub</Button>
                        </a>
                    </div>
                }


            </CardFooter>
        </Card>
    )
}

export default ProjectsCard