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
        <div className="order-2 min-[900px]:order-1  ">
          <p className=" text-lg font-[500]  font-Lora text-yellow-600">
            Hello, I'm 👋
          </p>
          <h1
            className={`${styles.homeHeadingText} font-serif text-[#915eff] violet-text-gradient`}
          >
            Suresh Pal
          </h1>
          <h1
            className={`${styles.homeSubText}  text-gray-400 font-[600] mt-2 font-Roboto`}
          >
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={40}
              loop={0}
              typeSpeed={100}
              words={["Front-end Developer", "DSA with C++"]}
            />
          </h1>
          <a
            href="https://drive.google.com/file/d/1WHGvlaFpP75lMFDxjnwfN9x7-lma_yFb/view?usp=sharing"
            target="_blank"
            className=" w-full flex justify-center items-center mt-4 sm:mt-10"
          >
            <button className="flex md:hidden w-[150px]  justify-center items-center tracking-widest  font-Roboto mt-2 py-[10px] text-lg uppercase  border-2 rounded-full ">
              Resume
            </button>
            <button className="btn mt-2 md:block hidden  font-Roboto hover:tracking-widest">
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
