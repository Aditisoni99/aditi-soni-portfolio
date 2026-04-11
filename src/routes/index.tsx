import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import VisionSection from "@/components/VisionSection";
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
      <SkillsSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
