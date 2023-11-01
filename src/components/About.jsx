import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { EducationDetails } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../Style";
import SectionWrapper from "../utils/SectionWrapper";
import { myphoto } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.headingText} `}>About Me</h1>
      </motion.div>
      <div className=" grid grid-cols-1 min-[800px]:grid-cols-3 gap-10 mb-16">
        <div className=" flex justify-center items-center min-[800px]:order-2 order-1">
          <div className=" bg-[#8533f6] shadow-2xl rounded-lg  ">
            <img
              src={myphoto}
              alt="my photo"
              className=" h-[285px] w-[245px]  mx-auto rounded-lg translate-x-[9px] -translate-y-[8px] shadow-lg"
            />
          </div>
        </div>
        <div className=" min-[800px]:col-span-2  min-[800px]:order-1 order-2 px-4">
          <p className=" text-lg font-[500] font-Lora text-yellow-600 w-full">
            Hello, I'm
          </p>
          <h1
            className={` text-5xl lg:text-6xl font-serif font-[600] mt-2 mb-5 violet-text-gradient`}
          >
            Suresh Pal
          </h1>
          <p className=" opacity-75 font-Lora tracking-wider text-lg ">
            I am a passionate and driven individual pursuing a Bachelor of
            Technology degree in Electronics and Communication Engineering from
            Ramkrishna Mahato Government Engineering College in Purulia, West
            Bengal.I am a enthusiastic and dedicated Front-End Web Developer
            with a strong foundation in React.js, Tailwind CSS, and proficiency
            in Data Structures and Algorithms (DSA) with adept in C++
            programming.I am passionate about creating elegant and user-friendly
            web applications, eager to contribute technical expertise and
            creativity to innovative projects.I am also interested in open
            source contribution.
          </p>
        </div>
      </div>
      <div>
        <h1 className={`${styles.subHeadingText} text-center mb-16`}>
          Education Details
        </h1>
        <div>
          <VerticalTimeline>
            {EducationDetails.map((item, index) => (
              <EducationCard key={index} education={item} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className=" text-[22px]  tracking-wider  font-[500] font-Roboto">
        {education.name}
      </h3>
      <p className=" text-base text-secondary  font-Lora">
        {education.description}
      </p>
    </VerticalTimelineElement>
  );
};

export default SectionWrapper(About, "about");
// export default About;
