import Image from 'next/image'
import React from 'react'
import pfp from "../../public/assets/dp.jpg"
import BlurFade from './ui/blur-fade'

const Title = () => {
    return (
        <div className='lg:mt-28 md:mt-28 mt-12 mb-10 flex flex-row'>
            <BlurFade>

            <div className='flex justify-between items-start'>
                <div className='flex flex-col max-w-lg mx-auto'>
                    <h1 className='pt-3 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-6xl md:text-5xl leading-none text-transparent text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]'>hi, i'm sidhanth <span className='text-yellow-400'>👋</span></h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex quis temporibus reiciendis deserunt iusto tempora doloribus! Consequatur reiciendis soluta dolores incidunt, perferendis non magni minima, veritatis inventore officia delectus.</p>
                </div>
                <div className=''>
                    <Image src={pfp} alt='Profile picture' className='ml-5 rounded-full  max-w-28' />
                </div>
            </div>
            </BlurFade>
        </div>
    )
}

export default Title