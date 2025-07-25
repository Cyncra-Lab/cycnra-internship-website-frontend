import NavBar from "@/components/NavBar";
import Footer from "@/components/aboutus/footer";
import Container from "@/components/Container";
import HeroSection from "@/sections/HomePageSections/HeroSection/HeroSection";
import TracksSection from "@/sections/HomePageSections/TracksSection/TracksSection";
import AboutSection from "@/sections/HomePageSections/AboutSection/AboutSection";

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

      {/* Footer Section */}
      {/*<section>
        <Footer />
      </section> */}
    </>
  );
}
