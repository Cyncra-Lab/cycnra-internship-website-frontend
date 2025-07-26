// import Navbar from '@/components/cohort/Navbar'
import Hero from "@/components/cohort/Hero";
import Interns from "@/components/cohort/Interns";
import React from "react";
import ProjectsSection from "@/components/cohort/ProjectsSection";
import Footer from "@/components/aboutus/footer";
import NavBar from "@/components/NavBar";

const Cohort = () => {
  return (
    <div className="w-full">
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
