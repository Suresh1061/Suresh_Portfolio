import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" h-[80px] w-full bg-footer bg-center bg-cover mt-10 flex flex-row  justify-around items-center border-t  max-[700px]:flex-col ">
      <h3 className=" max-[700px]:order-2 max-[700px]:mb-2 font-Lora tracking-wider">
        Copyright © {year}
      </h3>
      <h1 className=" text-2xl font-Roboto tracking-wide  max-[700px]:order-1 max-[700px]:my-2">
        Made by Suresh Pal
      </h1>
      <div className=" w-[200px]  flex justify-between text-gray-250 max-[700px]:hidden">
        <div className="  rounded-full green-pink-gradient  p-[1px] ">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://www.facebook.com/profile.php?id=100074086172427&mibextid=2JQ9oc"
            target="_blank"
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0a47c2] "
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
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0a47c2]  "
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
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0a47c2] "
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
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0a47c2] "
          >
            <FaTwitter size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
