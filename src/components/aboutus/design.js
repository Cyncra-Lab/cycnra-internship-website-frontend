import caret from "../../../public/assets/aboutus/svg/workflow/CaretRight.svg";

import Image from "next/image";
const Design = ({ frame1, maintext, subtext }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex  gap-[30px] items-center">
           <Image src={frame1} alt="image" className="w-[432px] h-[266px]" />
            <div className="flex flex-col w-[631px] ">
              <p className="text-[36px]  leading-[120%]  text-[#E6FAFC]">
              {maintext}
              </p>
              <p className="h-[136px] text-[20px] leading-[120%] mt-[21px] text-[#E6FAFC] ">
                {subtext}
              </p>
            </div>

        </div>
       

        <button className="h-[232px] focus:outline-2 focus:outline-white border-white  hover:bg-opacity-65 hover:border-[#FFC857] w-[78px] flex items-center justify-center border-[2px] rounded-[50px] ">
          <Image src={caret} alt="caret right icon" />
        </button>
      </div>
    </>
  );
};

export default Design;
