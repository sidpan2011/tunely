import React from 'react'

const HighLight = ({ text }) => {
  return (
    <h1 className='font-light rounded-lg bg-black dark:bg-white text-white dark:text-black w-fit px-2 py-1'>{text}</h1>
  )
}

export default HighLight