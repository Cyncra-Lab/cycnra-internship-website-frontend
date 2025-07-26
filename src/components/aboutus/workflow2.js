import Design2 from "./design2";
import Image from "next/image";

const Workflow2 = ({ frames }) => {
  return (
    <>
      <div className="flex flex-col  sm:gap-[50px] gap-[50px] md:hidden  ">
        <Design2
          frame1={frames.pic1}
          maintext="Design"
          subtext="Designing is a creative process that involves combining visual elements, user experience and functionality to create digital solutions that are both aesthetic and effective. our system optimizes every steps, saving time and boosting productivity. In context of a web agency, designing goes beyond just graphic elements, it includes layout design, user interaction (UX/UI)"
        />
        <div className="flex flex-col  sm:gap-[33px] sm:h-[450px]  gap-[20px] w-[100%]">
          <div className="h-[230px] sm:h-[250px] ">
            <Image
              src={frames.pic2}
              alt="image"
              className="w-[352px] sm:w-[392px] "
            />
          </div>

          <div className="flex justify-between items-center">
            <button className=" sm:h-[142px] h-[125px] sm:w-[70px]  w-[45px] focus:outline-2 outline-white  hover:bg-[#FFC85780] hover:text-[#FFC857] cursor-pointer text-[#02353C] text-[10px] sm:text-[14px]  bg-[#FFC857] py-auto  rounded-[50px] ">
              View Details
            </button>

            <div className="flex flex-col ] ">
              <p className="sm:text-[20px] text-[16px]   leading-[120%]  text-[#E6FAFC]">
                Research
              </p>
              <p className="sm:w-[400px] w-[250px] sm:text-[14px] text-[10px] leading-[120%] mt-[21px] text-[#E6FAFC] ">
                At the core of every successful project lies through research.
                Ou web agency prioritizes understanding your audience, market
                trends and industry insights to craft digital solutions that
                resonant with your goals. our system optimizes every steps,
                saving time and boosting productivity. whether handling simple
                tasks or managing complex projects.
              </p>
            </div>
          </div>
        </div>

        <Design2
          frame1={frames.pic3}
          maintext="Research"
          subtext="At the core of every successful project lies through research. Ou web agency prioritizes understanding your audience, market trends and industry insights to craft digital solutions that resonant with your goals. our system optimizes every steps, saving time and boosting productivity. whether handling simple tasks or managing complex projects."
        />
      </div>
    </>
  );
};

export default Workflow2;
