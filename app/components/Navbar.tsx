'use client'
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] bg-[#212121] sticky">
      <div className="flex flex-row justify-between text-white mx-10 h-full">
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
        <motion.div initial={{
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
          }} className="flex flex-row items-center">
          <div className="px-10 h-full flex items-center hover:bg-slate-700">
            About
          </div>
          <div className="px-10 h-full flex items-center hover:bg-slate-700">
            Projects
          </div>
          <div className="px-10 h-full flex items-center hover:bg-slate-700">
            Contact
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
