"use client"
import React from 'react'
import Image from 'next/image'
import aboutlogo from '../images/about.jpeg'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const Project = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true})
  return (
    <motion.div ref={ref} className='bg-[#161616] flex h-[250px] rounded-2xl opacity-80 overflow-hidden hover:bg-[#222222] hover:opacity-100'
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.1 },
            }}
            initial={{ x : 500 }} // Start off-screen to the left
            animate={inView ? { x: 0 } : {}}        // Move to its current position when in view
            transition={{ type: 'spring', stiffness: 50 }}>
        <Image src= {aboutlogo}/>    
        <div className='ml-4 mr-4'>
            <h3 className='text-3xl mb-3 mt-3'>Project headline</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero repellat rem, ab perspiciatis saepe numquam, quidem dolor voluptate, velit hic sunt ipsum eligendi? Culpa corrupti ipsum eaque nesciunt? Veritatis!</p>
        </div>
    </motion.div>
  )
}

export default Project