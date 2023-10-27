import React from "react";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className=" sm:text-5xl text-4xl  font-bold text-center mb-16">
          Technical  Skills
        </h1>
      </motion.div>
      <motion.div
        transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className=" flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto px-10 sm:px-6"
      >
        {technologies.map((data) => {
          return (
            <div
              className=" h-32 w-32 border rounded-lg green-pink-gradient  p-[1px] "
              key={data.name}
            >
              <div className=" h-full w-full bg-black-100 rounded-lg p-2 flex justify-between flex-col">
                <img src={data.icon} alt="" className=" mx-auto h-20"/>
                <p className=" text-sm opacity-75 text-center">{data.name}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
