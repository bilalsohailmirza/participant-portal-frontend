"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventHeroSection } from "./sections/HeroSection";
import { EventsDetailsSection } from "./sections/EventdetailsSection";
export default async function EventPage({
  params,
}: {
  params: Promise<{ event : string }>
}) {
  
    const event = (await params).event
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
      )
    }
// export default EventsPage;