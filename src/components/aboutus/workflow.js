import Image from "next/image";
import frame1 from "../../../public/assets/aboutus/svg/workflow/Frame1.svg";
import frame2 from "../../../public/assets/aboutus/svg/workflow/Frame2.svg";
import frame3 from "../../../public/assets/aboutus/svg/workflow/Frame3.svg";

import Design from "./design";
import Design2 from "./design2";
import { motion } from "framer-motion";
import Workflow2 from "./workflow2";

const Workflow = () => {
  const frames ={
    pic1:frame1,
    pic2:frame2,
    pic3:frame3,


  }
  return (
    <>
      <section className="w-[100%] xl:pl-20 h-auto lg:px-10 md:px-5 px-5 md:pt-[83px] pt-[40px] flex justify-center items-center   pb-[50px]   bg-[#02353C]">
        <motion.div
          className="w-[90%] flex flex-col  gap-[30px]  "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col gap-[10px] mb-[30px] md:gap-0 ">
            <p className=" lg:text-[32px] leading-[120%] text-[18px] w-[250px]  xl:w-[512px] lg:w-[400px] text-[#E6FAFC]">
              Seamless, Flexible and Efficient Workflow
            </p>
            <p className="lg:w-[535px]  w-[350px]  lg:text-[18px] text-[12px] leading-[120%] text-[#E6FAFC] tracking-[5%]">
              Our workflow is designed to be seamless, flexible and highly
              efficient. It adapts to your needs, ensuring smooth processes from
              start to finish. whether you’re handling simple tasks or managing
              complex projects.
            </p>
          </div>
          <div className=" flex-col  gap-[50px] hidden md:flex  ">
            <Design
              frame1={frame1}
              maintext="Design"
              subtext="Designing is a creative process that involves combining visual elements, user experience and functionality to create digital solutions that are both aesthetic and effective. our system optimizes every steps, saving time and boosting productivity. In context of a web agency, designing goes beyond just graphic elements, it includes layout design, user interaction (UX/UI)"
            />

            <div className="flex justify-between items-center">
              <button className=" lg:h-[192px] md:h-[125px] lg:w-[80px] w-[51px] focus:outline-2 outline-white  hover:bg-[#FFC85780] hover:text-[#FFC857] cursor-pointer text-[#02353C] text-[14px] lg:text-[18px] bg-[#FFC857] py-auto  rounded-[50px] ">
                View Details
              </button>

              <div className="flex  gap-[30px] items-center  lg:mt-0 ">
                <div className="flex flex-col ] ">
                  <p className=" lg:text-[28px]  md:text-[18px] leading-[120%]  text-[#E6FAFC]">
                    Research
                  </p>
                  <p className="lg:h-[136px]  lg:text-[18px] md:text-[14px] lg:w-[500px] md:w-[350px] leading-[120%] lg:mt-[21px] md:mt-[10px] text-[#E6FAFC] ">
                    At the core of every successful project lies through
                    research. Ou web agency prioritizes understanding your
                    audience, market trends and industry insights to craft
                    digital solutions that resonant with your goals. our system
                    optimizes every steps, saving time and boosting
                    productivity. whether handling simple tasks or managing
                    complex projects.
                  </p>
                </div>

                <Image
                  src={frame2}
                  alt="image"
                  className=" lg:w-[300px] lg:h-[266px]  md:w-[180px]"
                />
              </div>
            </div>

            <Design
              frame1={frame3}
              maintext="Research"
              subtext="At the core of every successful project lies through research. Ou web agency prioritizes understanding your audience, market trends and industry insights to craft digital solutions that resonant with your goals. our system optimizes every steps, saving time and boosting productivity. whether handling simple tasks or managing complex projects."
            />
          </div>
          <Workflow2 frames={frames}/>
        </motion.div>
      </section>
    </>
  );
};

export default Workflow;
