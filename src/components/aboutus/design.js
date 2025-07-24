import caret from "../../../public/assets/aboutus/svg/workflow/CaretRight.svg";

import Image from "next/image";
const Design = ({ frame1, maintext, subtext }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex  gap-[30px] items-center ">
          <Image
            src={frame1}
            alt="image"
            className="xl:w-[432px] lg:w-[300px] h-[266px]"
          />
          <div className="flex flex-col w-[631px] ">
            <p className="xl:text-[36px] lg:text-[28px]  leading-[120%]  text-[#E6FAFC]">
              {maintext}
            </p>
            <p className="h-[136px] xl:text-[20px] lg:text-[18px] lg:w-[520px] leading-[120%] mt-[21px] text-[#E6FAFC] ">
              {subtext}
            </p>
          </div>
        </div>

        <button className="xl:h-[232px] lg:h-[192px] focus:outline-2 focus:outline-white border-white  hover:bg-opacity-65 hover:border-[#FFC857] w-[78px] flex items-center justify-center border-[2px] rounded-[50px] ">
          <Image src={caret} alt="caret right icon" />
        </button>
      </div>
    </>
  );
};

export default Design;
