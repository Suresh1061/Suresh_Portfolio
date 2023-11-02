import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import { HiOutlineMail } from "react-icons/hi";
import { styles } from "../Style";
import { FaLocationDot, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact = () => {
  const formRef = useRef();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const InputHandler = () => {
    if (
      inputData.name != "" &&
      inputData.email != "" &&
      inputData.message != ""
    ) {
      setLoading(true);
      emailjs
        .send(
          "service_n9fn082",
          "template_89c3y5i",
          {
            from_name: inputData.name,
            to_name: "Suresh Pal",
            from_email: inputData.email,
            to_email: "sureshabantika@gmail.com",
            message: inputData.message,
          },
          "F3ftOlt4wpZ_Sgx-w"
        )
        .then(
          () => {
            message.success("Your message sent successfully");
            setLoading(false);
            setInputData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            message.error("Something went wrong. Please try again.");
          }
        );
    } else {
      setLoading(false);
      // message.warning("Please flill your data");
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.headingText}`}>Contact</h1>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
      >
        <h3 className={`${styles.subHeadingText}`}>Get in touch</h3>
        <p className=" opacity-70 text-lg font-Lora">
          I am available for any freelance or internship or full-time positions
        </p>
        <p className=" opacity-70 text-lg font-Lora">
          Connect me and let's talk
        </p>
      </motion.div>

      <div className=" flex justify-center items-center  lg:justify-around flex-col min-[800px]:flex-row gap-10  sm:gap-4 flex-wrap mt-8">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          className=" flex justify-center items-center"
        >
          <div className="  rounded-2xl sm:w-[400px] w-full green-pink-gradient p-[1px]">
            <div className="bg-black-100 p-5 rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.133238509599!2d87.30504014128167!3d23.112309916443614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7912fa05d3e89%3A0x4c195efefee44206!2sAbantika%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1691076822802!5m2!1sen!2sin"
                className=" object-fill w-full h-[210px] rounded-md"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className=" text-[16px] font-Lora tracking-wider opacity-95 mt-6">
                <h4 className=" flex  items-center gap-4 my-3">
                  <FaLocationDot size={22} color="#ff4d4d" />
                  Abantika
                </h4>
                <h4 className=" flex  items-center gap-4 my-3">
                  <FaTelegram size={22} color="0088cc" />
                  @Pal6378
                </h4>
                <h4 className=" flex  items-center gap-4 my-3">
                  <FaWhatsapp size={22} color="#1aff66" />
                  +91-8158946895
                </h4>
                <h4 className=" flex  items-center gap-4 my-3">
                  <HiOutlineMail size={22} color="#3385ff" />
                  sureshabantika@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "keyframes", delay: 0.3 }}
          className=" sm:w-[600px] w-full  rounded-2xl green-pink-gradient p-[1px]"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-black-100  p-5 rounded-2xl flex flex-col gap-8 "
          >
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={inputData.name}
                onChange={handleChange}
                autoComplete="off"
                required
                className="bg-tertiary py-4 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full shadow-inner"
              />
            </label>
            <label htmlFor="email">
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                value={inputData.email}
                onChange={handleChange}
                autoComplete="off"
                required
                className="bg-tertiary py-4 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            <label htmlFor="message">
              <textarea
                type="text"
                placeholder="Your Message"
                cols={30}
                name="message"
                value={inputData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                className="bg-tertiary py-4 px-6 placeholder:opacity-70 text-white rounded-lg outline-none border-none font-medium w-full min-h-[120px]"
              />
            </label>
            <ButtonCom loading={loading} onclick={InputHandler} />
          </form>
        </motion.div>
      </div>
    </>
  );
};

const ButtonCom = ({ loading, onclick }) => {
  return (
    <div>
      {!loading ? (
        <button
          className=" btn1 py-3 font-[500] font-Lora tracking-wider"
          onClick={onclick}
        >
          <svg
            height="22"
            width="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              fill="currentColor"
            ></path>
          </svg>
          <span>Send</span>
        </button>
      ) : (
        <button className=" btn2 py-3" onClick={onclick}>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                height="22"
                width="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
