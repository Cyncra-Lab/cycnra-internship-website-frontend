import { ArrowRight } from "lucide-react";
import cyncralogo from "../../../public/assets/aboutus/svg/header/cyncralogo.svg";
import Image from "next/image";

const Header = () => {
  const navLinks = ["Home", "About", "Cohorts", "ContactUs"];

  return (
    <>
      <header className="w-full flex justify-center fixed top-[10px] z-100 items-center   h-[120px]">
        <div className="w-[1235px] bg-[#02353C] flex justify-between items-center px-[20px]  h-[90px] rounded-[80px]">
          <div>
            <Image src={cyncralogo} alt="cyncra logo icon" />
          </div>
          <nav className="w-[336px] h-[22px] ">
            <ul className="flex gap-[40px]">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-normal text-[16px] leading-[140%] text-white hover:opacity-65 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <button className="w-[201px] h-[52px] bg-[#FFC857] focus:outline-2 outline-white  hover:bg-[#FFC85780] hover:text-slate-100 text-[#02353C] flex justify-between items-center px-[15px] rounded-[70px] border-0  font-bold text-[16px] leading-[140%] -tracking-[2%]">
              Apply Now <ArrowRight size={20} color="black" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
