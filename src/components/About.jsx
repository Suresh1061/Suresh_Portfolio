import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { EducationDetails } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <h1 className=" sm:text-5xl text-4xl  font-bold text-center mb-16">About</h1>
      </motion.div>
      <div>
        <VerticalTimeline>
          {EducationDetails.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </VerticalTimeline>
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
      <h3 className=" text-xl font-medium tracking-wide">{education.name}</h3>
      <p className=" text-base text-secondary ">{education.description}</p>
    </VerticalTimelineElement>
  );
};

export default SectionWrapper(About, "about");
// export default About;