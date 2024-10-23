// import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import ServicesSection from "@/components/ServicesSection";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
