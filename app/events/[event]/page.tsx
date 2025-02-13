"use client"
import Cookies from "js-cookie";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
// import { EventsDetailsSection } from "./sections/EventdetailsSection";
import EventDescriptionSection from "./sections/EventDescriptionSection";
// import EventRulesSection from "./sections/EventRulesSection";
import { EventRegistrationForm } from "./components/EventRegistrationForm";
import { usePathname } from "next/navigation";
export default function EventPage() {

    const authtoken = Cookies.get('authToken')
  
    const eventId = usePathname().slice(8)
    
    return (
        <>
        
        <Navbar />

        <EventHeroSection id={eventId} />

        {/* <EventsDetailsSection/> */}
        <EventDescriptionSection id={eventId}/>

        {/* <EventRulesSection/> */}
        
        <EventRegistrationForm id={eventId} token={authtoken} />

        <Footer />
        </>
      )
    }
// export default EventsPage;