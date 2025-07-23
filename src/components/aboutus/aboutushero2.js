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
      <section className="w-[1728px]  flex justify-center mt-[40px] ">
        <div className="w-[1428px] h-[572px]  flex flex-col ">
          <div className="flex justify-between items-center ">
            <p className="font-bold text-[40px] w-[574px] text-[#02353C] leading-[120%] ">
              Cyncra{" "}
              <span className="font-normal">
                knows that work shapes our future - so we make sure
              </span>{" "}
              <span className="text-[#FFC857] ">yours counts.</span>
            </p>
            <p className="w-[400px] h-[99px] text-[20px] leading-[120%] text-[#02353C] tracking-[5%] ">
              Our internship helps you build skills, confidence and connections
              for a career that matters.
            </p>
          </div>
          <div className="mt-[35px] h-[403px] flex gap-[40px] ">
            {display.map((items, index) => (
              <div
                key={index}
                className={`w-[327px] ${
                  index % 2 !== 0
                    ? "bg-[#02353C] self-end"
                    : "bg-[#FFC857] self-start"
                }  h-[326px]  flex items-center justify-center rounded-[20px]`}
              >
                <div className="w-[216px] h-[142px] ">
                  <Image src={items.imageicon} alt="card icon" />
                  <p
                    className={`text-[64px] ${
                      index % 2 !== 0 ? "text-[#E6FAFC]" : "text-[#02353C] "
                    }   font-bold  leading-[140%] `}
                  >
                    {items.number}+
                  </p>
                  <p
                    className={`text-[16px]  ${
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
