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
          className="w-[100%] xl:px-20 lg:px-10  flex flex-col justify-center items-center h-auto pt-[150px] pb-[50px]"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-[90%] xl:h-[609px]">
            <div className="flex justify-between lg:gap-[50px] xl:gap-0 items-center  ">
              <div className=" xl:h-[408px]  max-w-[751px]  ">
                <h1 className="xl:text-[60px]  lg:text-[44px] font-normal text-black ">
                  Our{" "}
                  <span className="font-bold text-[#02353C] leading-[140%] ">
                    Story
                  </span>{" "}
                  the Journey That's Shaped{" "}
                  <span className="font-bold leading-[140%]  text-[#FFC857]  ">
                    Our Success
                  </span>
                </h1>
                <p className="text-[20px] leading-[140%]   tracking-[5%] text-[#02353C]  max-w-[657px]  xl:mt-[30px] lg:mt-[10px]">
                  At Cyncra we’re more than just an internship program, We’re a
                  launchpad for tomorrow’s top tech talents. Our mission is to
                  empower ambitious learners to transform their skills, gain
                  real world experience and break into world class teams.
                </p>

                <button className="w-[234px] mt-[20px] focus:outline-2 outline-[orange] h-[56px] bg-[#FFC857] transition duration-150 hover:text-[#FFC857] hover:bg-[#02353C] flex justify-between items-center px-[20px] rounded-[70px] border-0 text-[#02353C] font-bold text-[16px] leading-[140%] -tracking-[2%]">
                  Apply Now <ArrowRight size={20} color="black" />
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
