import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClinicallyUnhingedSection from "@/components/ClinicallyUnhingedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <SkillsSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <ClinicallyUnhingedSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
