import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const ProjectsCard = ({ project }) => {
    return (
        <Card className="overflow-hidden">
            <Image
                src={project.gif}
                alt={project.title}
                width={300}
                height={200}
                className="w-full object-cover h-48"
            />
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.from_to_date}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.keywords.map((keyword, index) => (
                        <Button key={index} size="xs" variant="tag" className=" text-xs text-black dark:text-white font-medium px-2.5 py-0.5 rounded ">
                            {keyword}
                        </Button>
                    ))}
                </div>
            </CardContent>
            <CardFooter className='flex gap-2'>
                <div className=''>
                    <a href={project.links} target="_blank" rel="noopener noreferrer" className=" hover:underline">
                        <Button size="xs" className="text-xs">Website</Button>
                    </a>
                </div>
                <div className=''>
                    <a href={project.links} target="_blank" rel="noopener noreferrer" className="">
                        <Button size="xs" className="text-xs">GitHub</Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProjectsCard