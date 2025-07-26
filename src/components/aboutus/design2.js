import caret from "../../../public/assets/aboutus/svg/workflow/CaretRight.svg";

import Image from "next/image";
const Design2 = ({ frame1, maintext, subtext }) => {
  return (
    <>
      <div className="flex flex-col sm:gap-[33px]  gap-[20px] sm:h-[450px] w-[100%] ">
        <div className="h-[230px] sm:h-[250px] ">
             <Image src={frame1} alt="image" className="w-[352px] sm:w-[392px] " />

        </div>
       
        <div className="flex justify-between w-[100%] items-center sm:mt-0  ">
          <div className="flex  gap-[30px]  items-center ">
            <div className="flex flex-col sm:w-[396px] w-[256px] ">
              <p className=" sm:text-[20px] text-[16px]  leading-[120%]  text-[#E6FAFC]">
                {maintext}
              </p>
              <p className="sm:text-[14px]    text-[10px] leading-[120%] mt-[21px] text-[#E6FAFC] ">
                {subtext}
              </p>
            </div>
          </div>

          <button className="sm:h-[125px] h-[125px]  focus:outline-2 focus:outline-white border-white  hover:bg-opacity-65 hover:border-[#FFC857] w-[35px] sm:w-[55px] flex items-center justify-center border-[2px] rounded-[50px] ">
            <Image src={caret} alt="caret right icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Design2;
