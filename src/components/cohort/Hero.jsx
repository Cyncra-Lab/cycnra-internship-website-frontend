import Image from "next/image";

const Hero = () => (
  <div className="relative h-[500px] mt-42">
    <Image
      src="/Hero.jpg"
      alt="Hero Background"
      // fill
      className="object-cover brightness-50"
      priority
      width={1728}
      height={873}
    />

    {/* Overlay text */}
    <div className="absolute inset-0 z-10 flex items-center pt-110 pl-18">
      <div className="text-white text-left p-10 max-w-xl leading-[1.2]">
        <h2 className="text-4xl font-bold mb-2">OUR <span className="text-[#FFC857]">COHORT</span></h2>
        <p className="mb-8 mt-8 border-l-4 border-[#ffc857] pl-4 leading-[1.4] text-base max-w-[480px]">
          Explore our past and current internship cohorts, their innovative
          projects and the amazing interns who <br /> made them possible.
        </p>
        <button className="flex items-center justify-center gap-2 bg-[#02353C] text-white px-4 py-2 rounded-xl hover:bg-[#07626e]">
          <Image src="/Down.png" height={30} width={30} alt="Down Arrow" />
          Join our Next Cohort
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
