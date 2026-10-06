import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { Hero, ProjectSection, VinceCo, ServiceList, WhyMe, Process, Startups, About } from "@/components/site/Sections";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectSection />
        <VinceCo />
        <ServiceList />
        <WhyMe />
        <Process />
        <Startups />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
