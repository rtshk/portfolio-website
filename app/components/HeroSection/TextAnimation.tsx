'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const TextAnimation = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Ritesh',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'Frontend Developer',
      1000
      
    ]}
    className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
  )
}

export default TextAnimation