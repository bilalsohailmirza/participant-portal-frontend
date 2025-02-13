"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SocietyHeroSection } from "./sections/HeroSection";
import { AllSocietiesDisplaySection } from "./sections/AllSocietiesDisplaySection";
import { SocietiesCarousel } from "./sections/SocietiesCarousel";
const SocietiesPage = () =>{
    return (
        <>
        <Navbar />
        <SocietyHeroSection/>
        <SocietiesCarousel/>
        <AllSocietiesDisplaySection />
        <Footer />
        </>
      )}
  
export default SocietiesPage;