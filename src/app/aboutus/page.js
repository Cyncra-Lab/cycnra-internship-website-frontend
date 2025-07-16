"use client";

import Footer from "@/components/aboutus/footer";
import Aboutushero from "@/components/aboutus/aboutushero";
import Header from "@/components/aboutus/header";
import Testimonial from "@/components/aboutus/testimonial";
import Workflow from "@/components/aboutus/workflow";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main>
        <Aboutushero />
        <Workflow />
        <Testimonial />
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
