import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutSection(){
    return(
        <>
        <div className="max-w-xl space-y-6">
            <h3 className="text-5xl font-bold text-[var(--header-background)]">About the Program</h3>
            <h4 className="text-2xl font-bold text-[var(--header-background)]">Internship That Shapes Future Tech Leaders</h4>
            <p className="text-xl text-[var(--text-subtle-gray)]">
              At Cyncra, we transform your tech career by opening doors to hands-on experience, real
              world projects, and a supportive community. We offer multiple internship pathways
              designed to help you upskill and thrive as a valuable contributor in today's fast-paced
              tech space.
            </p>
            <p className="text-xl text-[var(--text-subtle-gray)]">
              Our internship lasts 6-8 months and is open to students and recent graduates.
              Enjoy real project experience, mentorship, and career development opportunities.
            </p>
            <button className="bg-[var(--yellow-btn)] text-[var(--header-background)] rounded-full py-[10px] px-[38px] font-bold flex gap-5 items-center">
            Learn More
            <FaArrowRight />
            </button>
          </div>

          <div>
            <Image src="/images/about_image.png" width={600} height={200} alt="about_image" />
          </div>
        </>
    );
    
}