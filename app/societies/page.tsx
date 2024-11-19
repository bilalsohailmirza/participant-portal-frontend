"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
import { AllSocietiesDisplaySection } from "./sections/AllSocietiesDisplaySection";
const SocietiesPage = () =>{
    return (
        <>
        <Navbar />

        <EventHeroSection/>

        <AllSocietiesDisplaySection />

        <Footer />
        </>
      )}
  
export default SocietiesPage;