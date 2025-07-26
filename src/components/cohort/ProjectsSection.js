"use client";

import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";
import NavBar from "../NavBar";

const projects = [
  {
    title: "Project One",
    subTitle: "Task management web App",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "/project1.jpg",
  },
  {
    title: "Project Two",
    subTitle: "E-Commerce Platform",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting ",
    img: "/project2.jpg",
  },
  {
    title: "Project Three",
    subTitle: "Shopping Website",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "/project3.jpg",
  },
];

const ProjectsSection = () => (
  <>
    <NavBar />
    <section className="bg-[#02353C] flex flex-col items-center justify-center py-15 text-white px-4 sm:px-6 md:px-20 w-full h-fit">
      <div className="w-full text-white flex flex-col items-center justify-center mt-5">
        <h1 className="lg:text-[64px] text-center text-[32px] font-bold mb-2 leading-[1.2]">
          Frontend Development Cohort-Q1 2025
        </h1>
        <h3 className="mb-2 leading-[1.4] md:text-[30px] text-[28px] text-center tracking-[0.05em] text-[#E6FAFCBD]">
          July 2025 - August 2025
        </h3>
        <h3 className="md:text-[30px] text-[20px] text-center tracking-[0.05em] font-normal mx-auto text-[#E6FAFCBD]">
          Focused on building responsive and user-friendly web interfaces.
        </h3>
      </div>

      <div className="w-full h-fit mt-20 px-4 sm:px-6 md:px-20 pb-20">
        <h3 className="text-[26px] font-semibold mb-6 leading-[1.2] flex items-center gap-4">
          <RiArrowRightLine /> Projects Worked On:
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-[2rem] w-full h-fit">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="w-full bg-[#02353C] text-white-100 rounded-3xl pb-8 border border-white/20"
            >
              <div className="w-full">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={455}
                  height={307}
                  className="rounded-t-3xl mb-4 w-full h-70 object-cover"
                />
              </div>
              <div className="px-5 py-1 max-w-[377px] h-fit">
                <h6 className="w-[377px] text-[1rem] font-normal mb-2 tracking-[0.15em] leading-[1.4]">
                  {proj.title}
                </h6>
                <h6 className="w-[377px] text-[1rem] font-normal mb-2 tracking-[0.15em] leading-[1.4]">
                  {proj.subTitle}
                </h6>
                <p className="w-full text-[1rem] text-[#CCD6D8] font-normal mb-4 tracking-[-0.02em] leading-[1.4]">
                  {proj.description}
                </p>
                <motion.button
                  className="w-[195px] sm:w-[120px] h-fit flex items-center justify-center gap-[10px] bg-[#FFC857] text-black text-[12px] p-[10px] p-[8px] mb-4 rounded-[70px] sm:rounded-[40px] hover:bg-[#f4c86e] cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProjectsSection;
