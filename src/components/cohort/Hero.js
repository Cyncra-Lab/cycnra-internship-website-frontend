"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const heroVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => (
  <section className="h-[40rem] w-full bg-[linear-gradient(rgba(2,53,60,0.4),rgba(2,53,60,0.4)),url('/Hero.jpg')] px-[5rem] bg-cover bg-center flex items-end mt-[10.5rem]">
    {/* Overlay text */}
    <motion.div
      variants={heroVariants}
      initial="initial"
      animate="animate"
      className="text-white text-left p-10 gap-[37px] w-full max-w-[814px] h-fit leading-[1.2]"
    >
      <h1 className="text-[64px] text-[#E6FAFC] font-bold mb-2">
        OUR <span className="text-[#FFC857]">COHORT</span>
      </h1>
      <h4 className="mb-8 mt-8 border-l-4 border-[#ffc857] pl-4 leading-[1.4] font-bold tracking-[0.05em] text-[24px] text-[#E6FAFC] w-full max-w-[728px] h-fit mx-auto">
        Explore our past and current internship cohorts, their innovative
        projects and the amazing interns who made them possible.
      </h4>
      <motion.button
        className="flex items-center justify-center gap-[0.625rem] bg-[#02353C] text-white text-[16px] px-6 py-4 rounded-xl hover:bg-[#07626e] cursor-pointer"
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
        <Image
          src="/Down.png"
          height={32}
          width={32}
          alt="Down Arrow"
          style={{ width: "auto" }}
        />
        Join our next Cohort
      </motion.button>
    </motion.div>
  </section>
);

export default Hero;
