"use client";
import React from "react";
import { useRef } from "react";
import logo from "../images/about.jpeg";
import Image from "next/image";
import js from "../images/jslogo.png";
import react from "../images/react.png";
import html from "../images/html.png";
import ts from "../images/typescript.png";
import css from "../images/css.png";
import next from "../images/nextjs.png";
import tailwind from "../images/tailwind.png";
import git from "../images/git.png";

import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 1 });
  return (
    <section
      ref={ref}
      className="text-white h-screen w-full flex flex-col justify-center "
    >
      <h3 className="text-center text-6xl mt-24">Skills</h3>
      <div className="w-full flex flex-col items-center justify-center h-[70%]">
        <motion.div
          className="flex space-x-20 mb-10"
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={inView ? { x: 0 } : {}} // Move to its current position when in view
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div>
            <Image
              className="rounded-full"
              src={js}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <Image
              className="rounded-full"
              src={ts}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <Image
              className="rounded-full"
              src={git}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <Image
              className="rounded-full"
              src={react}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
        </motion.div>
        <motion.div
          className="flex space-x-20 mt-10"
          initial={{ x: "100vw" }} // Start off-screen to the left
          animate={inView ? { x: 0 } : {}} // Move to its current position when in view
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div>
            <Image
              className="rounded-full"
              src={html}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <Image
              className="rounded-full"
              src={css}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <Image
              className="rounded-full"
              src={tailwind}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
          <div>
            <Image
              className="rounded-full"
              src={next}
              alt="logo"
              height={200}
              width={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
