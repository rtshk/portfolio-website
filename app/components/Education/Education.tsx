"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="h-screen text-white">
      <h2 className="m-24 text-5xl">Education</h2>
      <motion.div
        className="grid grid-cols-3 gap-10 mx-14"
        initial={{ y:500  }} // Start off-screen to the left
        animate={inView ? { y: 0 } : {}} // Move to its current position when in view
        transition={{ type: "spring", stiffness: 50 }}
      >
        <motion.div
          className="h-[550px] h-[500px] flex flex-col rounded-2xl overflow-hidden opacity-80  hover:opacity-100"
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
          }} >
          <div className="h-[40%] bg-[#222222] w-full text-8xl flex items-center justify-center"> 07 </div>
          <div className="h-[60%] p-7 bg-[#161616]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe delectus, quisquam reiciendis nulla quod quis vel facilis nostrum dolor cumque nobis cum assumenda esse perspiciatis rerum pariatur unde placeat veritatis!</div>
        </motion.div>
        <motion.div
          className="h-[550px] h-[500px] flex flex-col rounded-2xl overflow-hidden opacity-80  hover:opacity-100"
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
          }} >
          <div className="h-[40%] bg-[#222222] w-full text-8xl flex items-center justify-center"> 95.2% </div>
          <div className="h-[60%] p-7 bg-[#161616]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe delectus, quisquam reiciendis nulla quod quis vel facilis nostrum dolor cumque nobis cum assumenda esse perspiciatis rerum pariatur unde placeat veritatis!</div>
        </motion.div>
        <motion.div
          className="h-[550px] h-[500px] flex flex-col rounded-2xl overflow-hidden opacity-80  hover:opacity-100"
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
          }} >
          <div className="h-[40%] bg-[#222222] w-full text-8xl flex items-center justify-center"> 95.2% </div>
          <div className="h-[60%] p-7 bg-[#161616]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe delectus, quisquam reiciendis nulla quod quis vel facilis nostrum dolor cumque nobis cum assumenda esse perspiciatis rerum pariatur unde placeat veritatis!</div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Education;
