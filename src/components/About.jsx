import React from 'react'
import HighLight from './HighLight'
import BlurFade from './ui/blur-fade'

const About = () => {
  return (
    <div className='w-full max-w-2xl mx-auto'>
        <BlurFade>

        <HighLight text={"About"} />
        <div className='my-3'>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus inventore pariatur eligendi exercitationem debitis quis nobis doloribus fugit, cupiditate et facilis possimus mollitia ducimus harum blanditiis quaerat fugiat perferendis.</p>
        </div>
        </BlurFade>
    </div>
  )
}

export default About