"use client";
import Image from "next/image";
import footerimg from "../../../public/assets/aboutus/svg/footer/Image.svg";
import logo from "../../../public/assets/aboutus/svg/footer/logo.svg";
import facebookicon from "../../../public/assets/aboutus/svg/footer/Facebook.svg";
import twittericon from "../../../public/assets/aboutus/svg/footer/Twitter.svg";
import linkedinicon from "../../../public/assets/aboutus/svg/footer/Linkedin.svg";
import dayjs from "dayjs";

const Footer = () => {
  const currentYear = dayjs().year();
  const footerdisplay = [
    {
      headline: "Navigation",
      subtext: ["Home", "About Us", "What We Do"],
    },
    {
      headline: "What We Do",
      subtext: [
        "Encouraging Testing",
        "Shape future intern",
        "Sharing Information",
        "Building Leadership",
        "Shining a Light",
      ],
    },
    {
      headline: "LEGAL",
      subtext: ["General Info", "Privacy Policy", "Terms of Service"],
    },
    {
      headline: "TALK TO US",
      subtext: [
        "support@ercom.com",
        "+66 2399 1145",
        "Contact Us",
        "Facebook",
        "Linkedin",
        "Twitter",
      ],
    },
  ];
  return (
    <>
      <section className=" w-full md:h-[979px] h-[1086px]    relative    flex font-jakarta flex-col justify-end lg:mt-[150px] md:mt-[100px] sm:mt-[150px] mt-[100px]  ">
        <div className="absolute top-0 left-0 w-full  border-0 overflow-hidden  ">
          <svg
            className="w-full md:h-[211px] h-[51px] block"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 C400,0 1040,0 1440,100 L1440,100 L0,100 Z"
              fill="#02353C"
            />
          </svg>
        </div>

        <div className="md:h-[769px] bg-[#02353C]  py-[50px] md:py-0  relative  flex justify-center items-center  w-full  ">
          <div className="absolute lg:right-[20px]   md:-right-[80px] md:-top-[350px] sm:-top-[150px]  -top-[100px] right-0  lg:w-[592px] md:w-[492px] w-[182px] sm:w-[292px] md:h-[577px]">
            <Image src={footerimg} alt="a footer image" />
          </div>

          <div className="w-[90%] md:h-[620px]  flex flex-col overflow-hidden ">
            <div className="md:w-[489px] h-[153px] pt-[50px] md:pt-0 ">
              <h1 className=" lg:text-[40px] text-[32px] h-[45px]  lg:h-[80px] md:h-[60px] text-white">
                Ready to get started?
              </h1>
              <button className="lg:w-[489px] md:w-[389px] mt-[40px] w-[90%] h-[60px] transition-all duration-150 text-[14px] font-medium focus:outline-2 outline-white rounded-[27px] text-[#0A142F] hover:bg-[#0A142F] hover:text-white leading-[24px] tracking-[1px] bg-white md:mt-[12px]">
                KICKSTART YOUR FUTURE
              </button>
            </div>
            <div className="md:h-[339px] h-[528px] mt-[80px] pt-[50px] md:pt-0 md:border-b border-[#FFFFFF20]  pb-[50px] ">
              <div className="md:flex md:justify-between grid grid-cols-2 gap-[50px]">
                {footerdisplay.map((items, index) => (
                  <div key={index} className="flex flex-col gap-[20px]">
                    <h1 className="md:text-[15px] text-[20px] font-bold leading-[100%] text-[#E6FAFC]  ">
                      {items.headline.toUpperCase()}
                    </h1>
                    <div className="h-auto flex flex-col md:gap-[10px]">
                      {items.subtext.map((text, index) => (
                        <p
                          key={index}
                          className={`font-normal md:text-[15px] text-[14px] ${
                            items.headline !== "What We Do"
                              ? "cursor-pointer  hover:opacity-50  hover:underline"
                              : ""
                          }  leading-[30px] text-[#FFFFFF] opacity-80  `}
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[40px] flex md:justify-between md:items-center flex-col md:flex-row gap-[32px] md:gap-0 md:h-[40px] ">
              <Image src={logo} alt="logo icon" className="md:w-[100px] w-[124px]" />
              <p className="text-[14px] leading-[14px] md:w-[342px] text-white ">
                &copy;{currentYear} Lift Media. All Rights Reserved.
              </p>
              <div className="flex gap-[19px]">
                <Image src={facebookicon} alt="facebook icon" />
                <Image src={linkedinicon} alt="linkedin icon" />
                <Image src={twittericon} alt="twitter icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
