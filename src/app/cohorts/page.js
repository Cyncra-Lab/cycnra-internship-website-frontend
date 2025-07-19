// import Navbar from '@/components/cohort/Navbar'
import Hero from "@/components/cohort/Hero";
import Interns from "@/components/cohort/Interns";
import React from "react";
import CohortInfo from "@/components/cohort/CohortInfo";
import ProjectsSection from "@/components/cohort/ProjectsSection";
import Footer from "@/components/aboutus/footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const Cohort = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-[170px] z-20">
        <div className="relative w-full h-[100%]">
          <Image
            src="/images/navBG.png"
            alt="Navbar Background"
            fill
            className="object-cover"
            priority
          />
          <NavBar/>
        </div>
      </div>

      <Hero />
      {/* <CohortInfo /> */}
      <ProjectsSection />
      <Interns />
      <Footer />
      {/* <Interns />
        <Projects />  */}
    </div>
  );
};

export default Cohort;
