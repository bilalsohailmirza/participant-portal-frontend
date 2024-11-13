"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
import { AllEventsDisplaySection } from "./sections/AllEventsDisplaySection";
const EventsPage = () =>{
    return (
        <>
        <div className="flex justify-between px-5 py-2">
        <div className="py-1 text-xl font-bold">
          Campus Connect
        </div>
        <Navbar />
        </div>

        <EventHeroSection/>

        <AllEventsDisplaySection />

        <Footer />
        </>
      )}
  
export default EventsPage;