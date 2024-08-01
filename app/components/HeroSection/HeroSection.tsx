"use client";
import { motion, useInView } from "framer-motion";
import React from "react";
import Image from "next/image";
import profileImg from "../images/profileImg.jpeg";
import TextAnimation from "./TextAnimation";
import Navbar from "../Navbar";
const HeroSection = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="grid grid-cols-12 mt-24 px-12"
      >
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello, I am
          </h1>
          <TextAnimation />
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            fuga, libero ut reiciendis vitae eligendi molestias voluptates,
            minima,
          </p>
        </div>

        <div className="col-start-9 col-end-13 place-self-center">
          <Image
            className="rounded-full"
            src={profileImg}
            alt="profile-image"
            height={500}
            width={500}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          y: 500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="ml-10"
      >
        <button className="m-2 py-4 px-6 bg-white rounded-full hover:bg-slate-200">
          About Me
        </button>
        <button className="m-2 py-4 px-6 border border-white rounded-full hover:bg-slate-900 text-white">
          Resume
        </button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
