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
        <h2 className="text-4xl text-[#E6FAFC] font-bold mb-2">OUR <span className="text-[#FFC857]">COHORT</span></h2>
        <p className="mb-8 mt-8 border-l-4 border-[#ffc857] pl-4 leading-[1.4] tracking-[0.05em] text-[16px] text-[#E6FAFC] max-w-[480px]">
          Explore our past and current internship cohorts, their innovative
          projects and the amazing interns who made them possible.
        </p>
        <button className="flex items-center justify-center gap-2 bg-[#02353C] text-white px-6 py-4 rounded-xl hover:bg-[#07626e] cursor-pointer">
          <Image src="/Down.png" height={30} width={30} alt="Down Arrow" />
          Join our Next Cohort
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
