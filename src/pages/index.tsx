// import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedBySection from "@/components/TrustedBySection";
import GetInTouchSection from "@/components/GetInTouchSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExploreSection></ExploreSection>
      <ServicesSection></ServicesSection>
      <TestimonialsSection></TestimonialsSection>
      <TrustedBySection></TrustedBySection>
      <GetInTouchSection></GetInTouchSection>
    </>
  );
}
