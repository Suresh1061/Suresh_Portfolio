import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../Style";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { github } from "../assets";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { logoimg } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full h-[80px] backdrop-blur-md bg-black/30  flex items-center py-5 fixed top-0 z-20`}
    >
      <div className=" w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="h-10  object-contain" /> */}
          <div className=" flex gap-1 justify-center items-center">
            {/* <img
              src={logoimg}
              alt=""
              className=" h-[26px] w-[26px] border rounded-full"
            /> */}
            <p className=" text-[#915eff] text-[28px] md:text-3xl font-Dancing cursor-pointer tracking-wider ">
              Suresh Pal
            </p>
          </div>
        </Link>
        <div className="  flex items-center flex-row gap-6">
          <ul className="max-[750px]:hidden list-none flex flex-row gap-6 lg:gap-10">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.name ? "text-white" : "text-secondary"
                  } hover:text-white  font-Merriweather tracking-wider text-lg cursor-pointer relative`}
                  onClick={() => setActive(link.name)}
                >
                  <div className=" group">
                    <a href={`#${link.id}`}>{link.name}</a>
                    <div className=" absolute w-0 h-[3px] bg-white group-hover:w-full transition-[width] ease-out duration-300" />
                  </div>
                </li>
              );
            })}
          </ul>
          <a href="https://github.com/Suresh1061" target="_blank">
            <img
              src={github}
              alt="github"
              className={`${
                active === github ? "opacity-100" : "opacity-75 "
              } flex w-[30px] cursor-pointer hover:opacity-100  hover:scale-110 duration-200`}
              onClick={() => {
                setActive(github);
              }}
            />
          </a>

          <div className=" min-[750px]:hidden flex flex-1 justify-end items-center">
            <div>
              {!toggle ? (
                <AiOutlineMenu
                  size={25}
                  onClick={() => setToggle(!toggle)}
                  className=" cursor-pointer ease-linear duration-300"
                />
              ) : (
                <AiOutlineClose
                  size={25}
                  onClick={() => setToggle(!toggle)}
                  className=" cursor-pointer ease-linear duration-300"
                />
              )}
            </div>
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } min-[750px]:hidden p-6 backdrop-blur-lg bg-black/70 absolute top-[80px] right-0 w-[70%] sm:w-[50%] h-screen z-10 ease-linear duration-300 flex flex-col justify-start items-center`}
          >
            <ul className=" list-none  flex flex-col  justify-center items-center gap-4 mt-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.name ? "text-white" : "text-secondary"
                    } hover:text-white  text-xl cursor-pointer relative  font-Merriweather tracking-wider py-4`}
                    onClick={() => {
                      setActive(link.name);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
            <div className=" mt-10">
              <h1 className=" text-lg font-Lora tracking-wider font-[500] opacity-90 text-center mb-8">
                Let's connect
              </h1>
              <div className="w-[200px]  flex justify-between text-gray-250">
                <div className="  rounded-full green-pink-gradient  p-[1px] ">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    href="https://www.facebook.com/profile.php?id=100074086172427&mibextid=2JQ9oc"
                    target="_blank"
                    className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#1877F2] "
                  >
                    <FaFacebookF size={20} />
                  </motion.a>
                </div>
                <div className="  rounded-full green-pink-gradient  p-[1px] ">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    href="https://instagram.com/sureshpal8158?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                    className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer instra "
                  >
                    <FaInstagram size={20} />
                  </motion.a>
                </div>
                <div className="  rounded-full green-pink-gradient  p-[1px] ">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    href="https://www.linkedin.com/in/suresh-pal-80020922a"
                    target="_blank"
                    className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0072b1] "
                  >
                    <FaLinkedinIn size={20} />
                  </motion.a>
                </div>
                <div className="  rounded-full green-pink-gradient  p-[1px] ">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    href="https://twitter.com/SureshPal685"
                    target="_blank"
                    className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#1DA1F2] "
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
