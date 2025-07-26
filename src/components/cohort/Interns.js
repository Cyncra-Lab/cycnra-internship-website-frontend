"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useRef } from "react";

const interns = [
  {
    name: "Mafiana GLORY",
    role: "Product Designer",
    img: "/intern1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Kiibati Oshadipe",
    role: "Product Designer",
    img: "/intern2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Abiola Godwin",
    role: "Product Designer",
    img: "/intern3.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Praise Godwin",
    role: "Product Designer",
    img: "/intern4.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Extra Intern",
    role: "Product Designer",
    img: "/intern4.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

const Interns = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 md:px-10
 w-full h-fit"
    >
      <h3
        className="text-2xl px-4 sm:px-6 md:px-10
 font-semibold mb-8 flex items-center gap-2"
      >
        <Image
          src="/images/arrow-right.png"
          alt="Right arrow"
          width={35}
          height={24}
        />{" "}
        Interns:
      </h3>

      <div
        className="px-4 sm:px-6 md:px-10
"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h3 className="text-[30px] md:text-[36px] leading-[1.4] tracking-[-0.02em] text-[#02353C] font-bold">
            Engage with Our
            <br className="block md:hidden lg:block" />
            <span className="md:inline"> Creative Team</span>
          </h3>
          <p className="text-[21px] leading-[1.4] tracking-[-0.02em] text-[#02353C] max-w-md text-sm text-left font-normal">
            Meet our talented and dedicated <br /> cohort members and their
            roles.
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex flex-col items-center justify-center">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 w-full max-w-full no-scrollbar"
          >
            {interns.map((member, i) => (
              <div
                key={i}
                className="w-[88vw] sm:w-[80vw] md:w-[60vw] lg:w-[344px] min-h-[420px] max-w-[344px] bg-[#02353C] text-white rounded-[12px] shadow-md flex-shrink-0"
              >
                <div className="w-full h-full px-[40px] py-[32px]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={264}
                    height={192}
                    className="rounded-md w-full h-48 object-cover mb-4"
                  />
                  <div className="w-full h-fit gap-[12px]">
                    <h3 className="width-[264px] height-[28px] font-bold text-[#E6FAFC] text-[20px] leading-[1.4] tracking-[0.15em] uppercase">
                      {member.name}
                    </h3>
                    <p className="width-[264px] height-[20px] text-[14px] leading-5 font-normal mt-3">
                      {member.role}
                    </p>
                    <p className="width-[264px] height-[34px] text-[12px] font-normal leading-[1.4] tracking-[-0.02em] mt-3 mb-3">
                      {member.description}
                    </p>
                    <div className="flex space-x-4 text-white text-sm">
                      <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
                      <FaTwitter className="hover:text-gray-300 cursor-pointer" />
                      <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Arrows */}
          <div className="flex justify-center space-x-6 mt-8">
            <motion.button
              onClick={() => scroll("left")}
              whileHover={{ x: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 text-xl text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <div className="w-full max-w-[40px]">
                <Image
                  src="/images/arrowup.png"
                  width={40}
                  height={40}
                  alt="Left Arrow"
                  style={{ height: "auto", width: "auto" }}
                />
              </div>
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              whileHover={{ x: 4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 text-xl text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <div className="w-full max-w-[40px]">
                <Image
                  src="/images/arrowdown.png"
                  width={40}
                  height={40}
                  alt="Right Arrow"
                  style={{ height: "auto", width: "auto" }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interns;
