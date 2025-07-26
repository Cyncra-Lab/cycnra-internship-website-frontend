import caret from "../../../public/assets/aboutus/svg/workflow/CaretRight.svg";

import Image from "next/image";
const Design = ({ frame1, maintext, subtext }) => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex  gap-[30px] items-center   lg:mt-0 ">

          <Image
            src={frame1}
            alt="image"
            className=" lg:w-[300px] lg:h-[266px]  md:w-[180px]"
          />
          <div className="flex flex-col lg:w-[631px] md:w-[400px]  ">
            <p className=" lg:text-[28px]  md:text-[18px] leading-[120%]  text-[#E6FAFC]">
              {maintext}
            </p>
            <p className="lg:h-[136px]  lg:text-[18px] md:text-[14px] lg:w-[500px] leading-[120%] lg:mt-[21px] md:mt-[10px] text-[#E6FAFC] ">
              {subtext}
            </p>
          </div>

        </div>

        <button className="lg:h-[192px] h-[125px] w-[55px] focus:outline-2 focus:outline-white border-white  hover:bg-opacity-65 hover:border-[#FFC857] lg:w-[78px] flex items-center justify-center border-[2px] rounded-[50px] ">
          <Image src={caret} alt="caret right icon" />
        </button>
      </div>
    </>
  );
};

export default Design;
