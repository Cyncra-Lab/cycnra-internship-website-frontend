import Navbar from '@/components/cohort/Navbar'
import Hero from '@/components/cohort/Hero'
import Interns from '@/components/cohort/Interns'
import React from 'react'
import CohortInfo from '@/components/cohort/CohortInfo'
import ProjectsSection from '@/components/cohort/ProjectsSection'
import CTASection from '@/components/cohort/CTASection'
import Footer from '@/components/cohort/Footer'

const Cohort = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <CohortInfo />
        <ProjectsSection />
        <Interns />
        <CTASection />
        <Footer />
        {/* <Interns />
        <Projects />  */}
    </div>
  )
}

export default Cohort