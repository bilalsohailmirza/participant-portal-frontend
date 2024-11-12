"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturedMembersCarousel } from "./sections/FeaturedMembers";
import { SocietyHeroSection } from "./sections/HeroSection";
import { EventsSection } from "./sections/EventsSection";
import { CompetitionSection } from "./sections/CometitionSection";
const SocietiesPage = () =>{
    return (
        <>
        <div className="flex justify-between px-5 py-2">
        <div className="py-1 text-xl font-bold">
          Campus Connect
        </div>
        <Navbar />
        </div>

        <SocietyHeroSection/>

        <div className="text-4xl font-bold flex justify-center my-4">
            <h2>Featured Members</h2>
        </div>
        <FeaturedMembersCarousel />

        <div className="text-4xl font-bold flex justify-center my-4">
            <h2>Events By Society</h2>
        </div>
        <EventsSection/>

        <div className="text-4xl font-bold flex justify-center my-4">
            <h2>Competitons By Society</h2>
        </div>
        <CompetitionSection/>


        <Footer />
        </>
      )}
  
  export default SocietiesPage;