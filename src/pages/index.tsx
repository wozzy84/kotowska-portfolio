// import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExploreSection></ExploreSection>
      <ServicesSection></ServicesSection>
    </>
  );
}
