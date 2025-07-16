"use client";
import Image from "next/image";
import quote from "../../../public/assets/aboutus/svg/testimonial/quote.svg";
import thumbs from "../../../public/assets/aboutus/svg/testimonial/Group.svg";
import image from "../../../public/assets/aboutus/svg/testimonial/Image.svg";
import image1 from "../../../public/assets/aboutus/svg/testimonial/Image1.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Rating from "./rating";
import { useRef } from "react";

const Testimonial = () => {
  const testimonies = [
    {
      profileimage: image,
      username: "John Okonkwo",
      jobrole: " Frontend Developer, Turing Inc",
      testimony:
        "Cyncra didn’t just teach me how to write clean code, it completely reshaped how I see myself as a tech professional. The hands-on projects, real deadlines, and supportive team made me feel like I was already working in a top-tier company. Just a month after the program, I landed my first remote frontend role, and I’ve been growing ever since.",
    },
    {
      profileimage: image1,
      username: "David Adeyemi",
      jobrole: "Product Designer, Flutterwave",
      testimony:
        "Coming into Cyncra, I had doubts about whether I belonged in tech. But every session, every challenge, and every mentor pushed me to believe in myself. I built things I never thought I could, collaborated with amazing peers, and walked away with a portfolio I’m proud of. Today, I work at Flutterwave,  and it all started with Cyncra..",
    },
    {
      profileimage: image,
      username: "Fatima Lawal",
      jobrole: "Software Engineer, NestPay",
      testimony:
        "What set Cyncra apart for me was the structure. There was a clear path from learning to doing to becoming. The mentorship was exceptional — I wasn’t just taught, I was guided and challenged. That journey gave me the confidence to apply to competitive startups, and I got hired by a YC-backed company a few weeks after graduation.",
    },
    {
      profileimage: image1,
      username: "Chinedu Obi",
      jobrole: "Backend Developer, Kuda Bank",
      testimony:
        "Before Cyncra, I’d spent months jumping from one online tutorial to another without direction. The program gave me real-world experience — building actual projects, solving real problems, and learning how to work as part of a product team. It prepared me not just technically, but mentally for the fast-paced tech world.",
    },
    {
      profileimage: image,
      username: "Blessing Adebayo",
      jobrole: "UI/UX Designer, Moniepoint",
      testimony:
        "Cyncra helped me go from passive learner to active creator. I went from watching courses to building applications with deadlines, reviews, and teamwork. It was intense, but incredibly rewarding. More than the skills, Cyncra gave me belief in myself. I now work as a UI/UX designer, and I still apply the lessons I learned there every day.",
    },
    {
      profileimage: image1,
      username: "Tomiwa Ogunleye",
      jobrole: "DevOps Engineer, Paystack",
      testimony:
        "Transitioning into tech from a different field felt like climbing a mountain until I joined Cyncra. They broke down complex ideas, created space for questions, and pushed me beyond my comfort zone. I got to work on real deployments and learned the DevOps pipeline hands-on. Today, I support production systems at Paystack — thanks to the solid foundation from Cyncra.",
    },
  ];
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const cardWidth =
      container.firstElementChild.offsetWidth +
        parseInt(getComputedStyle(container).gap) || 24;

    const scrollAmount = cardWidth * 1;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="w-full flex justify-center items-center h-[720px]">
        <div className="w-[95%] h-[600px]  flex gap-[116px]">
          <div className="w-[239px]  h-[348px] ">
            <div className="flex justify-center items-center bg-[#02353C] w-[239px] h-[185px] ">
              <Image src={quote} alt="left quote icon" />
            </div>
            <div className="w-[239px] h-[338px] flex flex-col gap-[5px] items-center  ">
              <div className="flex gap-[15px] items-center ">
                <Image src={thumbs} alt="thumbs up icon" />
                <p className="text-[36px] font-bold  leading-[167%] text-[#02353C]">
                  Testimonial
                </p>
              </div>
              <Rating rating={5} />
              <div className="flex mt-[8px] items-center ">
                <button onClick={() => scroll("left")} aria-label="Scroll Left">
                  <ChevronLeft size={20} color="black" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll Right"
                >
                  {" "}
                  <ChevronRight size={20} color="black" />{" "}
                </button>
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex-1 bg-[#02353C] h-[600px] flex items-center justify-start gap-[24px] px-[40px] rounded-tl-[30px] rounded-bl-[30px] overflow-x-auto scroll-smooth  no-scrollbar transition-all duration-300"
          >
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="min-w-[600px] h-[288px]  bg-white rounded-[10px] p-[40px] flex-shrink-0"
              >
                <div className="grid w-full grid-cols-[50px_1fr] gap-[15px]">
                  <Image src={testimony.profileimage} alt="image" />
                  <div className="">
                    <p className="text-[20px] font-bold text-[#02353C] ">
                      {testimony.username}
                    </p>
                    <p className="text-[16px]  text-[#02353C]">
                      {testimony.jobrole}
                    </p>
                  </div>
                  <p className="w-[520px] text-[16px] text-[#02353C] mt-[24px]">
                    {testimony.testimony}
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

export default Testimonial;
