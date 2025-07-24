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
          <div className="flex justify-between items-center ">
            <p className="font-bold xl:text-[40px] lg:text-[32px] lg:w-[474px] xl:w-[574px] text-[#02353C] leading-[120%] ">
              Cyncra{" "}
              <span className="font-normal">
                knows that work shapes our future - so we make sure
              </span>{" "}
              <span className="text-[#FFC857] ">yours counts.</span>
            </p>
            <p className="max-w-[400px] text-[20px] leading-[120%] text-[#02353C] tracking-[5%] ">
              Our internship helps you build skills, confidence and connections
              for a career that matters.
            </p>
          </div>
          <div className="mt-[35px] h-[403px] flex gap-[40px] ">
            {display.map((items, index) => (
              <div
                key={index}
                className={` xl:w-[337px] lg:w-[257px] ${
                  index % 2 !== 0
                    ? "bg-[#02353C] self-end"
                    : "bg-[#FFC857] self-start"
                }  h-[326px] flex items-center pl-[20px]   rounded-[20px]`}
              >
                <div className=" h-[142px] flex  flex-col  justify-center  ">
                  <Image src={items.imageicon} alt="card icon" />
                  <p
                    className={`xl:text-[64px] lg:text-[50px] ${
                      index % 2 !== 0 ? "text-[#E6FAFC]" : "text-[#02353C] "
                    }   font-bold   leading-[140%] `}
                  >
                    {items.number}+
                  </p>
                  <p
                    className={`xl:text-[16px] lg:text-[14px]  ${
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
