'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] bg-[#121212] mt-2">
      <div className="flex flex-row justify-between text-white ml-10 mr-20 h-full">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex items-center h-50px text-3xl font-sans font-semibold"
        >
          rtshk
        </motion.div>
        <motion.div className="flex flex-row items-center" initial={{
            y: -500,
            opacity: 0,
            scale:1,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }} >
          <motion.div whileHover={{
                scale: 1.04,
                transition: { duration: 0.1 },
            }} className="px-10 h-full flex items-center rounded-full hover:bg-[#222222]">
            About
          </motion.div>
          <motion.div
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
        }} className="px-10 h-full flex items-center rounded-full hover:bg-[#222222]">
            Skills
          </motion.div>
          <motion.div
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
        }} className="px-10 h-full flex items-center rounded-full hover:bg-[#222222]">
            Projects
          </motion.div>
          <motion.div
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
        }} className="px-10 h-full flex items-center rounded-full hover:bg-[#222222]">
            Education
          </motion.div>
          <motion.div
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.1 },
        }} className="px-10 h-full flex items-center rounded-full hover:bg-[#222222]">
            Contact
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
