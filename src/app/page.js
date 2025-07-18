import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import HeroSection from "@/sections/HomePageSections/HeroSection/HeroSection";
import TracksSection from "@/sections/HomePageSections/TracksSection/TracksSection";
import AboutSection from "@/sections/HomePageSections/AboutSection/AboutSection";
import Cohort from "./cohort/Cohort"; // keep this from cohort branch

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[url('/images/hero_background.png')] bg-cover bg-center">
        <NavBar />
        <Container className="h-full flex flex-col justify-between pt-30 pb-10">
          <HeroSection />
        </Container>
      </section>

      {/* Tracks Section */}
      <section className="bg-[var(--header-background)] py-20">
        <Container>
          <TracksSection />
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20">
        <Container className="flex flex-col lg:flex-row justify-between gap-12">
          <AboutSection />
        </Container>
      </section>

      {/* Cohort Section - from cohort branch */}
      <section className="py-20 bg-white">
        <Container>
          <Cohort />
        </Container>
      </section>

      {/* Footer Section */}
      <section className="relative bg-[var(--header-background)] text-[var(--text-white)] py-20 mt-[100px] overflow-hidden">
        <Container>
          <Footer />
        </Container>
      </section>
    </>
  );
}
