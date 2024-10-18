import React from 'react'
import HighLight from './HighLight'

const ContactMe = () => {
  return (
    <div className=''>
        <HighLight text={"Contact Me"} extraClassName={"items-center"} />
        <h1 className='mt-9 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-5xl md:text-4xl leading-none text-center text-transparent text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in'>Get in Touch</h1>
        <div className='max-w-lg text-center mx-auto mb-52 mt-3'>
            <p>Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.</p>
        </div>
    </div>
  )
}

export default ContactMe