import Image from "next/image";

import cardicon from "../../../public/assets/aboutus/svg/aboutushero/cardmembership.svg";
import kanban from "../../../public/assets/aboutus/svg/aboutushero/Kanban.svg";
import ramadhan from "../../../public/assets/aboutus/svg/aboutushero/ramadhan.svg";
import course from "../../../public/assets/aboutus/svg/aboutushero/course.svg";

const Aboutushero2 = () => {
  const display = [
    {
      imageicon: cardicon,
      number: "300",
      text: "COMMUNITY MEMBERS",
    },
    {
      imageicon: kanban,
      number: "1500",
      text: "TOTAL PROJECTS",
    },
    {
      imageicon: ramadhan,
      number: "1",
      text: "YEARS OF DEDICATED SERVICE",
    },
    {
      imageicon: course,
      number: "300",
      text: "HANDPICKED INTERNSHIPS",
    },
  ];
  return (
    <>
      <section className="w-[100%]  flex justify-center mt-[40px] ">
        <div className="w-[90%] h-[572px]  flex flex-col ">
          <div className="flex lg:flex-row flex-col gap-[18px] lg:gap-0 lg:justify-between lg:items-center ">
            <p className="font-bold xl:text-[40px] lg:text-[32px] sm:text-[28px] text-[18px] lg:w-[474px] xl:w-[574px] sm:w-[100%] w-[90%] text-[#02353C] leading-[120%] ">
              Cyncra{" "}
              <span className="font-normal">
                knows that work shapes our future so we make sure
              </span>{" "}
              <span className="text-[#FFC857] ">yours counts.</span>
            </p>
            <p className="lg-w-[400px] lg:text-[20px] min-w-[231px] sm:text-[18px] text-[14px] leading-[120%] text-[#02353C] tracking-[5%] ">
              Our internship helps you build skills, confidence and connections
              for a career that matters.
            </p>
          </div>
          <div className="mt-[35px] lg:h-[403px] lg:flex lg:gap-[40px] grid grid-cols-2 md:gap-[25px] gap-[19px] ">
            {display.map((items, index) => (
              <div
                key={index}
                className={` xl:w-[337px] lg:w-[257px] ${
                  index % 2 !== 0
                    ? "bg-[#02353C] self-end"
                    : "bg-[#FFC857] self-start"
                }  lg:h-[326px] flex items-center p-[20px] md:py-[30px] lg:py-0  rounded-[20px]`}
              >
                <div className=" lg:h-[142px] flex  flex-col gap-[8px]  justify-center  ">
                  <Image src={items.imageicon} alt="card icon" />
                  <p
                    className={`xl:text-[64px] lg:text-[50px] sm:text-[24px] md:text-[32px] text-[16px] ${
                      index % 2 !== 0 ? "text-[#E6FAFC]" : "text-[#02353C] "
                    }   font-bold   leading-[140%] `}
                  >
                    {items.number}+
                  </p>
                  <p
                    className={`xl:text-[16px] lg:text-[14px] md:text-[18px] sm:text-[14px]  text-[12px] ${
                      index % 2 !== 0 ? "text-[#E6FAFC]" : "text-[#02353C] "
                    }    `}
                  >
                    {items.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutushero2;
