import Image from "next/image";
import frame1 from "../../../public/assets/aboutus/svg/workflow/Frame1.svg";
import frame2 from "../../../public/assets/aboutus/svg/workflow/Frame2.svg";
import frame3 from "../../../public/assets/aboutus/svg/workflow/Frame3.svg";

import Design from "./design";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <>

      <section
        className="w-[100%] xl:pl-20 lg:px-10 md:pt-[83px] pt-[40px] flex justify-center items-center  lg:pb-[50px]  bg-[#02353C]"
      
      >

 
        <motion.div className="w-[90%] flex flex-col  lg:gap-[30px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}>
          <div className="flex md:justify-between md:items-center md:flex-row flex-col gap-[10px] md:gap-0 ">
            <p className=" lg:text-[32px] leading-[120%] text-[20px]  xl:w-[512px] lg:w-[400px] text-[#E6FAFC]">
              Seamless, Flexible and Efficient Workflow
            </p>
            <p className="w-[535px]  lg:text-[18px] text-[14px] leading-[120%] text-[#E6FAFC] tracking-[5%]">
              Our workflow is designed to be seamless, flexible and highly
              efficient. It adapts to your needs, ensuring smooth processes from
              start to finish. whether you’re handling simple tasks or managing
              complex projects.
            </p>
          </div>
          <Design
            frame1={frame1}
            maintext="Design"
            subtext="Designing is a creative process that involves combining visual elements, user experience and functionality to create digital solutions that are both aesthetic and effective. our system optimizes every steps, saving time and boosting productivity. In context of a web agency, designing goes beyond just graphic elements, it includes layout design, user interaction (UX/UI)"
          />

          <div className="flex justify-between items-center">
            <button className=" lg:h-[192px]  lg:w-[80px] focus:outline-2 outline-white  hover:bg-[#FFC85780] hover:text-[#FFC857] cursor-pointer text-[#02353C]  lg:text-[18px] bg-[#FFC857] py-auto  rounded-[50px] ">
              View Details
            </button>

            <div className="flex  items-center gap-[20px]">
              <div className="flex flex-col ] ">
                <p className=" lg:text-[28px] leading-[120%]  text-[#E6FAFC]">
                  Research
                </p>
                <p className="h-[136px] lg:text-[18px] lg:w-[520px] leading-[120%] mt-[21px] text-[#E6FAFC] ">
                  At the core of every successful project lies through research.
                  Ou web agency prioritizes understanding your audience, market
                  trends and industry insights to craft digital solutions that
                  resonant with your goals. our system optimizes every steps,
                  saving time and boosting productivity. whether handling simple
                  tasks or managing complex projects.
                </p>
              </div>

              <Image
                src={frame2}
                alt="image"
                className=" lg:w-[300px] h-[266px]"
              />

            </div>
          </div>

          <Design
            frame1={frame3}
            maintext="Research"
            subtext="At the core of every successful project lies through research. Ou web agency prioritizes understanding your audience, market trends and industry insights to craft digital solutions that resonant with your goals. our system optimizes every steps, saving time and boosting productivity. whether handling simple tasks or managing complex projects."
          />
        </motion.div>
      </section>
    </>
  );
};

export default Workflow;
