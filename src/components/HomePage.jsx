import React from 'react'
import Title from './Title'
import { FloatingDockDemo } from './FloatingDock'
import About from './About'
import { Gallery } from './Gallery'

const HomePage = () => {
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <Title />
            <About />
            <Gallery />
            <div className='absolute bottom-24 left-0 right-0'>
                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default HomePage