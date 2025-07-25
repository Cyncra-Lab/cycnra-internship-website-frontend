import Image from "next/image";

import heroimage from "../../../public/assets/aboutus/svg/aboutushero/heroimg.svg";

import { ArrowRight } from "lucide-react";
import Aboutushero2 from "../aboutus/aboutushero2";
import { motion } from "framer-motion";

const Aboutushero = () => {
  return (
    <>
      <section className="  bg-[url('/assets/aboutus/svg/aboutushero/herobg.svg')] bg-no-repeat bg-center bg-cover ">
        <motion.div
          className="w-[100%] xl:px-20 sm:px-10  px-5 flex flex-col justify-center items-center h-auto pt-[150px] lg:pb-[50px]"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-[90%] xl:h-[609px] ">
            <div className="flex justify-between lg:flex-row flex-col lg:gap-[50px] gap-[39px] xl:gap-0 items-center  ">
              <div className=" xl:h-[408px]  max-w-[751px] min-w-[231px] ">
                <h1 className="xl:text-[60px]  lg:text-[44px] text-[24px] md:text-[40px] sm:text-[32px] font-normal text-black ">
                  Our{" "}
                  <span className="font-bold text-[#02353C] leading-[140%] ">
                    Story
                  </span>{" "}
                  the Journey That has Shaped{" "}
                  <span className="font-bold leading-[140%]  text-[#FFC857]  ">
                    Our Success
                  </span>
                </h1>
                <p className="lg:text-[20px] sm:text-[16px] md:text-[18px] text-[14px] mt-[10px] leading-[140%]   tracking-[5%] text-[#02353C]  max-w-[657px]  xl:mt-[30px] lg:mt-[10px]">
                  At Cyncra we’re more than just an internship program, We’re a
                  launchpad for tomorrow’s top tech talents. Our mission is to
                  empower ambitious learners to transform their skills, gain
                  real world experience and break into world class teams.
                </p>

                <button className="sm:w-[234px] w-[118px]  mt-[20px] focus:outline-2 outline-[orange] h-[33px] sm:h-[56px] bg-[#FFC857] transition duration-150 hover:text-[#FFC857] hover:bg-[#02353C] flex lg:justify-between justify-center items-center lg:px-[20px]  rounded-[70px] border-0 text-[#02353C] font-bold text-[14px] sm:text-[16px] leading-[140%] -tracking-[2%]">
                  Apply Now <ArrowRight size={20} color="black   " />
                </button>
              </div>
              <Image
                src={heroimage}
                alt="about us hero image"
                className="xl:h-[600px]  min-w-[300px] lg:h-[500px]"
              />
            </div>
          </div>
          <Aboutushero2 />
        </motion.div>
      </section>
    </>
  );
};

export default Aboutushero;
