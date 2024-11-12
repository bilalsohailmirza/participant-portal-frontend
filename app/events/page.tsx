"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
import { EventsDetailsSection } from "./sections/EventdetailsSection";
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

        <EventsDetailsSection/>

        <Footer />
        </>
      )}
  
export default EventsPage;