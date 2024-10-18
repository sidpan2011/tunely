import React from 'react'
import BlurFade from './ui/blur-fade'
import HighLight from './HighLight'
import Image from 'next/image'


const Experiences = () => {
    const experiences = [
        {
            logo: "https://dev.0byte.tech/assets/default-BtN-z6rI.png",
            company_name: "ZeroByte",
            title: "Co-founder, CEO",
            from_to_date: "Sep 2024 - Present"

        },
        {
            logo: "https://dev.0byte.tech/assets/default-BtN-z6rI.png",
            company_name: "ZeroByte",
            title: "Co-founder, CEO",
            from_to_date: "Sep 2024 - Present"

        },
        {
            logo: "https://dev.0byte.tech/assets/default-BtN-z6rI.png",
            company_name: "ZeroByte",
            title: "Co-founder, CEO",
            from_to_date: "Sep 2024 - Present"

        },

    ]
    return (
        <div className='w-full max-w-2xl mx-auto'>
            <BlurFade>
                <HighLight text={"Work Experiences"} />
                {
                    experiences.map((item, index) => (
                        <div className='flex justify-between items-center'>
                            <div className='my-5 flex items-center' key={index}>
                                <Image src={item.logo} width={80} height={80} />
                                <div>
                                    <h3>{item.company_name}</h3>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm dark:text-white/40 text-black/40'>{item.from_to_date}</p>
                            </div>
                        </div>
                    ))

                }

            </BlurFade >
        </div >
    )
}

export default Experiences