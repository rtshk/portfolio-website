  'use client'
  import React, { useRef } from 'react'
  import Image from 'next/image'
  import aboutimage from './images/about.jpeg'
  import { motion, useInView } from 'framer-motion'

  const About = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.3 }) // Adjust threshold as needed

    return (
      <div ref={ref} className='flex flex-row justify-between w-full h-screen'>
        <motion.div 
          className='flex justify-center items-center w-[50%]' 
          initial={{ x: '-100vw' }} // Start off-screen to the left
          animate={inView ? { x: 0 } : {}}        // Move to its current position when in view
          transition={{ type: 'spring', stiffness: 50 }} // Adjust as needed
        >
          <div className='h-[500px] w-[500px]'>
            <Image className="rounded-3xl" src={aboutimage} alt="profile-image" height={500} width={500} />
          </div>
        </motion.div>
        <motion.div 
          className='w-[50%] flex items-center' 
          initial={{ x: '100vw' }} // Start off-screen to the right
          animate={inView ? { x: 0 } : {}}        // Move to its current position when in view
          transition={{ type: 'spring', stiffness: 50 }} // Adjust as needed
        >
          <div>
          <h1 className='text-white text-center text-base text-5xl w-[75%] mb-7'>Summary</h1>
          <p className='text-[#ADB7BE] text-base text-xl w-[75%]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptatibus sequi aperiam inventore praesentium excepturi natus alias, vero nostrum dignissimos rerum? Maxime quisquam beatae accusantium magnam rem? Quas, suscipit repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus quam, quod aut sunt aperiam? Distinctio, laborum minus! Accusantium veniam aliquid ex officiis nostrum cumque tenetur aspernatur adipisci, provident saepe..
          </p>
          </div>
        </motion.div>
      </div>
    )
  }

  export default About
