import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" h-[80px] w-full bg-footer bg-center bg-cover mt-10 flex justify-around items-center border-t  max-[700px]:flex-col ">
      <h3 className=" max-[700px]:order-2 mb-2">Copyright © {year}</h3>
      <h1 className=" text-2xl  max-[700px]:order-1 my-2">
        Made by Suresh Pal
      </h1>
      <div className=" w-[150px]  flex justify-evenly text-gray-250 max-[700px]:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=100074086172427&mibextid=2JQ9oc"
          target="_blank"
        >
          <FaFacebookF
            size={25}
            className=" cursor-pointer hover:text-[#1877F2] hover:scale-110"
          />
        </a>
        <a
          href="https://instagram.com/sureshpal8158?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
        >
          <FaInstagram
            size={25}
            className=" cursor-pointer hover:text-[#e7563c]  hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/suresh-pal-80020922a"
          target="_blank"
        >
          <FaLinkedinIn
            size={25}
            className=" cursor-pointer hover:text-[#0a47c2] hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
