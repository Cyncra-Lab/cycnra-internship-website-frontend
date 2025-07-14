'use client'

import Footer from "@/components/aboutus/footer"
import Aboutushero from "@/components/aboutushero"
import Header from "@/components/header"
import Testimonial from "@/components/testimonial"
import Workflow from "@/components/workflow"


const AboutUs = () => {
  return (
        <>
        <Header/>
        <main>
            <Aboutushero/>
            <Workflow/>
            <Testimonial/>
        </main>
        <Footer/>
       
        </>
   
  )
}

export default AboutUs