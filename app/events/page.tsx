"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
import { AllEventsDisplaySection } from "./sections/AllEventsDisplaySection";
const EventsPage = () =>{
    return (
        <>
        
        <Navbar />

        <EventHeroSection/>

        <AllEventsDisplaySection />

        <Footer />
        </>
      )}
  
export default EventsPage;