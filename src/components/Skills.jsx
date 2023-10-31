import React from "react";
import { technologies } from "../constants";
import { styles } from "../Style";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const Skills = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.headingText}`}>Skills</h1>
      </motion.div>
      <motion.div
        // transition={{ duration: 1, type: "spring", delay: 0.6}}
        // initial={{ x: 50, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        className="grid  min-[850px]:grid-cols-2 gap-10 lg:gap-20 max-w-7xl mx-auto"
      >
        <FrameworkSkills />
        <ToolsAndLanguages />
        <TechnicalTools />
        <NonTechnicalTools />
        <LanguageProficiency />
      </motion.div>
    </div>
  );
};

const FrameworkSkills = () => {
  return (
    <>
      <div>
        <h1 className={`${styles.subHeadingText}  mb-4 sm:mb-6 `}>
          Web Frameworks
        </h1>
        <motion.div
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" flex flex-row flex-wrap gap-6"
        >
          {technologies.map((data) => {
            return (
              <>
                {data.catagory === "web" ? (
                  <div
                    className=" h-[60px] w-[60px] border rounded-lg green-pink-gradient  p-[1px] "
                    key={data.name}
                  >
                    <div className=" h-full w-full bg-black-100 rounded-lg p-2 flex justify-between flex-col">
                      <img src={data.icon} alt="" className=" mx-auto h-16" />
                      {/* <p className=" text-[12px] opacity-75 text-center font-Lora tracking-wider">
                        {data.name}
                      </p> */}
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

const ToolsAndLanguages = () => {
  return (
    <>
      <div>
        <h1 className={`${styles.subHeadingText}  mb-4 sm:mb-6 `}>
          Languages & Tools
        </h1>
        <motion.div
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" flex flex-row flex-wrap gap-6"
        >
          {technologies.map((data) => {
            return (
              <>
                {data.catagory === "language" || data.catagory === "tools" ? (
                  <div
                    className=" h-[60px] w-[60px] border rounded-lg green-pink-gradient  p-[1px] "
                    key={data.name}
                  >
                    <div className=" h-full w-full bg-black-100 rounded-lg p-2 flex justify-between flex-col">
                      <img src={data.icon} alt="" className=" mx-auto h-16" />
                      {/* <p className=" text-[12px] opacity-75 text-center font-Lora tracking-wider">
                        {data.name}
                      </p> */}
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

const TechnicalTools = () => {
  return (
    <>
      <div>
        <h1 className={`${styles.subHeadingText}  mb-4 sm:mb-6 `}>
          Technical Skills
        </h1>
        <motion.div
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" flex flex-row flex-wrap gap-6"
        >
          {technologies.map((data) => {
            return (
              <>
                {data.catagory === "tech" ? (
                  <div
                    className=" border rounded-lg green-pink-gradient  p-[1px] "
                    key={data.name}
                  >
                    <div className=" h-full w-full bg-black-100 rounded-lg py-2 px-4 flex justify-between flex-col">
                      <p className=" text-[16px] opacity-75 text-center font-Lora tracking-wider">
                        {data.name}
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

const NonTechnicalTools = () => {
  return (
    <>
      <div>
        <h1 className={`${styles.subHeadingText}  mb-4 sm:mb-6 `}>
          Non Techniacl Skills
        </h1>
        <motion.div
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" flex flex-row flex-wrap gap-6"
        >
          {technologies.map((data) => {
            return (
              <>
                {data.catagory === "non_tech" ? (
                  <div
                    className=" border rounded-lg green-pink-gradient  p-[1px] "
                    key={data.name}
                  >
                    <div className=" h-full w-full bg-black-100 rounded-lg py-2 px-4 flex justify-between flex-col">
                      <p className=" text-[16px] opacity-75 text-center font-Lora tracking-wider">
                        {data.name}
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

const LanguageProficiency = () => {
  return (
    <>
      <div className=" min-[850px]:col-span-2">
        <h1 className={`${styles.subHeadingText}  mb-4 sm:mb-6 `}>
          Language Proficiency
        </h1>
        <motion.div
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className=" flex flex-row flex-wrap gap-4 sm:gap-6 "
        >
          {technologies.map((data) => {
            return (
              <>
                {data.catagory === "speak" ? (
                  <div
                    className=" border rounded-lg green-pink-gradient  p-[1px] "
                    key={data.name}
                  >
                    <div className=" h-full w-full bg-black-100 rounded-lg py-2 px-4 flex justify-between flex-col">
                      <p className=" text-[18px]  text-center font-Lora font-[500] tracking-wider">
                        {data.name}
                      </p>
                      <p className=" opacity-80 text-[14px] tracking-wider">
                        {data.proficiency}
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
