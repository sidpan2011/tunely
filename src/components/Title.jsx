import Image from 'next/image'
import React from 'react'
import pfp from "../../public/assets/dp.jpg"

const Title = () => {
    return (
        <div className='lg:my-28 my-12 flex items-center justify-center mx-5 md:mx-8 2xl:min-mx-96  flex-row'>
            <div className='flex '>
                <div className='flex flex-col max-w-lg mx-auto'>
                    <h1 className='whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-6xl md:text-5xl leading-none text-transparent text-black dark:text-white font-semibold tracking-tight text-balance text-3xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]'>hi, i'm sidhanth <span className='text-yellow-400'>👋</span></h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex quis temporibus reiciendis deserunt iusto tempora doloribus! Consequatur reiciendis soluta dolores incidunt, perferendis non magni minima, veritatis inventore officia delectus.</p>
                </div>
                <div>
                    <Image src={pfp} alt='Profile picture' className='m-5 rounded-full border-opacity-custom max-w-24' />
                </div>
            </div>
        </div>
    )
}

export default Title