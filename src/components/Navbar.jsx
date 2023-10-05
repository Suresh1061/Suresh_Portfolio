import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../Style";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { github } from "../assets";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full h-[80px] backdrop-blur-md bg-black/30  flex items-center py-5 fixed top-0 z-20 `}
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
          <img src={logo} alt="logo" className="h-10  object-contain" />
          {/* <p className=" text-white text-[18px] font-bold cursor-pointer tracking-wide uppercase ">
            Suresh Pal
          </p> */}
        </Link>
        <div className="  flex items-center flex-row gap-6">
          <ul className="max-[800px]:hidden list-none flex flex-row gap-6 lg:gap-10">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.name ? "text-white" : "text-secondary"
                  } hover:text-white font-medium text-[18px] cursor-pointer relative`}
                  onClick={() => setActive(link.name)}
                >
                  <div className=" group">
                    <a href={`#${link.id}`}>{link.name}</a>
                    <div className=" absolute w-0 h-0.5 bg-white group-hover:w-full transition-[width] ease duration-300" />
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

          <div className=" min-[800px]:hidden flex flex-1 justify-end items-center">
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
            } min-[800px]:hidden p-6 backdrop-blur-lg bg-black/70 absolute top-[80px] right-0 w-[60%] sm:w-[50%] h-screen z-10 ease-linear duration-300 flex flex-col justify-start items-center`}
          >
            <ul className=" list-none  flex flex-col  justify-center items-center gap-4 mt-8">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`text-white font-poppins font-medium text-xl py-4 cursor-pointer  `}
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
              <h1 className=" text-lg text-center mb-8">Let's connect</h1>
              <div className=" w-[150px]  mx-auto flex justify-evenly gap-2 text-gray-300">
                <a
                  href="https://www.facebook.com/profile.php?id=100074086172427&mibextid=2JQ9oc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF
                    size={25}
                    onClick={() => setToggle(!toggle)}
                    className=" cursor-pointer hover:text-[#1877F2] hover:scale-110"
                  />
                </a>
                <a
                  href="https://instagram.com/sureshpal8158?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    size={25}
                    onClick={() => setToggle(!toggle)}
                    className=" cursor-pointer hover:text-[#e7563c]  hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/suresh-pal-80020922a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn
                    size={25}
                    onClick={() => setToggle(!toggle)}
                    className=" cursor-pointer hover:text-[#0a47c2] hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
