import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section className="flex justify-between gap-20">
      <div className="max-w-3xl space-y-8">
        <h3 className="text-6xl font-bold text-[var(--header-background)]">
          About the Program
        </h3>
        <h4 className="text-4xl font-bold text-[var(--header-background)]">
          Internship That Shapes Future Tech Leaders
        </h4>
        <p className="text-2xl text-[var(--text-subtle-gray)]">
          {`At Cyncra, we transform your tech career by opening doors to hands
            on experience, real world projects and a supportive community. We 
            offer multiple internship pathways designed to help you up-skill and
            thrive as a valuable contributor in today's fast paced technology space.
            By joining our program, you will gain practical skill, deepen your 
            knowledge and connect with network of driven peers and mentors 
            who will propel your growth. `}
        </p>
        <p className="text-2xl text-[var(--text-subtle-gray)]">
          Our internship last 8-6 months and are open to students and recent
          graduates.Enjoy real project experience, mentorship and career
          development opportunities.
        </p>
        <button className="bg-[var(--yellow-btn)] font-oxygen text-[var(--header-background)] rounded-full py-[10px] px-[38px] font-bold flex gap-5 items-center">
          Learn More
          <FaArrowRight />
        </button>
      </div>

      <div className="max-w-xl">
        <Image
          src="/images/about_image.png"
          width={608}
          height={650}
          alt="about_image"
        />
      </div>
    </section>
  );
}
