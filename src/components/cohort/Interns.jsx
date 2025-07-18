import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const interns = [
  {
    name: "Mafiana GLORY",
    role: "Product Designer",
    img: "/intern1.png",
    description: "Lorem ipsum dolor sit amet, dummy text of printing.",
  },
  {
    name: "Kiibati Oshadipe",
    role: "Product Designer",
    img: "/intern2.jpg",
    description: "Lorem ipsum dolor sit amet, dummy text of printing.",
  },
  {
    name: "Abiola Godwin",
    role: "Product Designer",
    img: "/intern3.jpg",
    description: "Lorem ipsum dolor sit amet, dummy text of printing.",
  },
  {
    name: "Praise Godwin",
    role: "Product Designer",
    img: "/intern4.jpg",
    description: "Lorem ipsum dolor sit amet, dummy text of printing.",
  },
];

const Interns = () => {
  return (
    <section className="bg-white py-16 px-15">
      <h3 className="text-xl font-semibold mb-10">→ Interns:</h3>
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-between items-center mb-10">
          <h4 className="text-2xl text-[#02353C] font-bold mb-2">
            Engage with Our <br /> Creative Team
          </h4>
          <p className="text-gray-600 max-w-md text-sm text-right">
            Meet our talented and dedicated cohort members and their roles.
          </p>
        </div>

        {/* <h2 className="text-3xl font-bold mb-2">
          Engage with Our Creative Team
        </h2> */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interns.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#02353C] text-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg uppercase">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
              <p className="text-xs mt-2 mb-3 text-gray-300">
                {member.description}
              </p>
              <div className="flex space-x-3 text-white text-sm">
                <FaLinkedin />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-10">
          <button className="w-8 h-8 border rounded-full text-xl cursor-pointer">
            ‹
          </button>
          <button className="w-8 h-8 border rounded-full text-xl cursor-pointer">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interns;
