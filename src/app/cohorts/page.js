// import Navbar from '@/components/cohort/Navbar'
import Hero from "@/components/cohort/Hero";
import Interns from "@/components/cohort/Interns";
import React from "react";
import ProjectsSection from "@/components/cohort/ProjectsSection";
import Footer from "@/components/aboutus/footer";
import NavBar from "@/components/NavBar";

const Cohort = () => {
  return (
    <div>
      <div className="bg-[url('/images/navBG.png')] bg-cover bg-center fixed top-0 left-0 w-full h-[168px] z-20">
        <NavBar />
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
