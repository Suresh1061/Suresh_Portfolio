import React from "react";
import { ProjectDetails } from "../constants";
import { styles } from "../Style";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import { AiFillGithub } from "react-icons/ai";
import { LiaEditSolid } from "react-icons/lia";

const ProjectCard = ({
  index,
  duration,
  name,
  description,
  image,
  tags,
  gitlink,
  demolink,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: `${duration}`,
        type: "spring",
      }}
      className="rounded-2xl sm:w-[361px] h-[424px] w-full green-pink-gradient p-[2px] flex justify-center items-center"
    >
      <div className="bg-tertiary p-5 rounded-2xl">
        <div className=" relative h-[160px] w-full overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt="project-image"
            className=" w-full h-full bg-cover rounded-md"
          />
        </div>
        <div className=" mt-5 h-[200px] flex flex-col justify-between">
          <div>
            <h1 className=" text-[21px] tracking-wide font-Roboto">{name}</h1>
            <p className=" text-secondary text-[15px]  py-2 font-Lora tracking-wide">
              {description}
            </p>
            <div className=" flex justify-start gap-4 text-[14px] ">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`${tag.color} text-red-400 font-Lora tracking-wide font[500]`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
          <button className=" w-full flex justify-between mt-4">
            <a href={gitlink} target="_blank">
              <AiFillGithub
                size={25}
                className=" text-secondary hover:text-white"
              />
            </a>
            <a href={demolink} target="_blank">
              <LiaEditSolid
                size={26}
                className=" text-secondary hover:text-white"
              />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.headingText}`}>Projects</h1>
      </motion.div>
      <div className=" flex flex-wrap justify-center gap-7">
        {ProjectDetails.map((data) => (
          <ProjectCard key={`project-${data.id}/`} index={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "projects");
