import React from "react";
import { astronut } from "../assets";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../Style";
import "./Button.css";


const Home = () => {
  return (
    <section className=" w-full relative mx-auto h-screen" id="home">
      <div
        className={` ${styles.paddingX} w-full absolute inset-0 top-[120px] min-[900px]:top-[80px] max-w-7xl mx-auto flex min-[900px]:flex-row flex-col min-[900px]:justify-around  items-center gap-6`}
      >
        <div className="order-2 min-[900px]:order-1 ">
          <p className=" text-lg font-semibold font-sans text-yellow-600">
            Hello, I'm 👋
          </p>
          <h1 className={`${styles.heroHeadText} font-serif text-[#915eff] `}>
            Suresh Pal
          </h1>
          <h1
            className={`${styles.heroSubText}  text-gray-400 font-[600] mt-2`}
          >
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={40}
              loop={0}
              typeSpeed={100}
              words={["Front-end Developer", "DSA Learner"]}
            />
          </h1>
          <a
            href="https://drive.google.com/file/d/1WHGvlaFpP75lMFDxjnwfN9x7-lma_yFb/view?usp=sharing"
            target="_blank"
            className=" w-full flex justify-center items-center mt-4 sm:mt-10"
          >
            <button className="flex lg:hidden w-[120px]  justify-center items-center tracking-wider font-sans mt-2 py-2 text-lg font-semibold border-2 rounded-full ">Resume</button>
            <button className="btn mt-2 lg:block hidden font-sans">
              <span>Resume</span>
              <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div>
            </button>
          </a>
        </div>
        <div className=" order-1 min-[900px]:order-2">
          <motion.img
            // animate={{ y: [0, -24, 0] }}
            // transition={{
            //   delay: 0.9,
            //   duration: 1,
            //   // ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "loop",
            // }}
            src={astronut}
            alt="astronut"
            className=" w-[400px] animate-pingpong"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
