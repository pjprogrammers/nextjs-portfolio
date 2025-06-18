import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import LinkTreeSection from "@/components/linktree-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WelcomeScreen from "@/components/welcome-screen";
import AmbientEffects from "@/components/ambient-effects";
import PageTransition from "@/components/page-transition";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <AmbientEffects />
      <Header />
      <PageTransition>
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <LinkTreeSection />
          <ContactSection />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
