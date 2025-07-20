import Image from "next/image";

const Hero = () => (
  <div className="relative h-[500px]">
    {/* Background image */}
    <Image
      src="/Hero.jpg"
      alt="Hero Background"
      fill
      className="object-cover brightness-50"
      priority
    />

    {/* Overlay text */}
    <div className="absolute inset-0 z-10 flex items-center">
      <div className="text-white text-left p-10 max-w-xl">
        <h2 className="text-4xl font-bold mb-2">OUR <span className="text-[#FFC857]">COHORT</span></h2>
        <p className="mb-4">
          Explore our past and current internship cohorts, their innovative
          projects and the amazing interns who made them possible.
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
