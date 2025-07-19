"use client"

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useRef } from "react";

const interns = [
  {
    name: "Mafiana GLORY",
    role: "Product Designer",
    img: "/intern1.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Kiibati Oshadipe",
    role: "Product Designer",
    img: "/intern2.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Abiola Godwin",
    role: "Product Designer",
    img: "/intern3.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Praise Godwin",
    role: "Product Designer",
    img: "/intern4.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    name: "Extra Intern",
    role: "Product Designer",
    img: "/intern4.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

const Interns = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h3 className="text-xl font-semibold mb-8">→ Interns:</h3>

      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h4 className="text-2xl text-[#02353C] font-bold">
            Engage with Our<br /> Creative Team
          </h4>
          <p className="text-gray-600 max-w-md text-sm text-right">
            Meet our talented and dedicated cohort members and their roles.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          >
            {interns.map((member, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-[#02353C] text-white p-5 rounded-xl shadow-md flex-shrink-0"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="rounded-md w-full h-48 object-cover mb-4"
                />
                <h3 className="font-semibold text-md uppercase">
                  {member.name}
                </h3>
                <p className="text-sm text-teal-100">{member.role}</p>
                <p className="text-xs mt-2 mb-3 text-gray-300">
                  {member.description}
                </p>
                <div className="flex space-x-4 text-white text-sm">
                  <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
                  <FaTwitter className="hover:text-gray-300 cursor-pointer" />
                  <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

          {/* Slide Arrows */}
          <div className="flex justify-center space-x-6 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 text-xl text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <Image src="/images/arrowup.png" width={40} height={40} alt="Left Arrow"/>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 text-xl text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <Image src="/images/arrowdown.png" width={40} height={40} alt="Right Arrow"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interns;
