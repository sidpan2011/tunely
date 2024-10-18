import React from 'react'
import Title from './Title'
import { FloatingDockDemo } from './FloatingDock'

const HomePage = () => {
    return (
        <div>
            <Title />
            <div className='absolute bottom-24 left-0 right-0'>
                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default HomePage