import Image from 'next/image';

export default function HeroSection(){
    return(
        <>
        <div className="flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto mt-20">
            <h1 className="text-8xl text-[var(--header-background)] font-bold">
              Empowering the Next <br /> Generation of Talent.
            </h1>

            <p className="text-2xl text-[var(--header-background)] opacity-70">
              Gain real world experience, develop your skills, connect with <br />
              industry experts and prepare for a successful career
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button className="bg-[var(--yellow-btn)] font-oxygen text-xl text-[var(--header-background)] font-bold px-[32px] py-[18px] rounded-full">
                Get Started
              </button>
              <button className="bg-[var(--header-background)] font-oxygen text-xl text-gray-50 font-bold px-[32px] py-[18px] rounded-full">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Bottom Boxes */}
          <div className="flex justify-center items-end gap-5 flex-nowrap overflow-x-auto pt-10 text-[var(--text-white)]">
            <Image src="/images/hero_image.png" width={280} height={300} alt="hero_image" />
            <div className="bg-[var(--header-background)] rounded-[20px] py-[58px] px-[32px] w-[280px] h-[258px]">
              <Image src="/images/card_membership.svg" width={32} height={32} alt="card_membership" />
              <h2 className="lg:text-6xl font-bold mt-2">300+</h2>
              <p className="text-sm font-base mt-4">COMMUNITY MEMBERS</p>
            </div>
            <div className="bg-[var(--header-background)] rounded-[20px] py-[27px] px-[32px] w-[281px] h-[194px]">
              <Image src="/images/kanban.svg" width={32} height={32} alt="kanban" />
              <h2 className="lg:text-6xl font-bold mt-2">1500+</h2>
              <p className="text-sm font-base  mt-4">TOTAL PROJECTS</p>
            </div>
            <div className="bg-[var(--yellow-btn)] rounded-[20px] py-[73px] px-[32px] w-[280px] h-[310px] text-[var(--text-dark)]">
              <Image src="/images/dedicated_service.svg" width={32} height={32} alt="dedicated_service" />
              <h2 className="lg:text-6xl font-bold  mt-2">1+</h2>
              <p className="text-sm font-normal  mt-4">YEAR OF DEDICATED SERVICE</p>
            </div>
            <div className="bg-[var(--header-background)] rounded-[20px] py-[128px] px-[32px] w-[218px] h-[376px]">
              <Image src="/images/course.svg" width={32} height={32} alt="course" />
              <h2 className="lg:text-6xl font-bold  mt-2">300+</h2>
              <p className="text-sm font-base mt-4">HANDPICKED INTERNSHIPS</p>
            </div>
          </div>
        </>
    );
}