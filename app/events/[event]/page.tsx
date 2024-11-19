"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
import { EventsDetailsSection } from "./sections/EventdetailsSection";
import EventDescriptionSection from "./sections/EventDescriptionSection";
import EventRulesSection from "./sections/EventRulesSection";
import EventRegistrationForm from "./components/EventRegistrationForm";
export default async function EventPage({
  params,
}: {
  params: Promise<{ event : string }>
}) {
  
    const event = (await params).event
    return (
        <>
        
        <Navbar />

        <EventHeroSection/>

        {/* <EventsDetailsSection/> */}
        <EventDescriptionSection/>

        <EventRulesSection/>
        
        <EventRegistrationForm/>

        <Footer />
        </>
      )
    }
// export default EventsPage;