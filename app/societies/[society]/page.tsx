"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturedMembersCarousel } from "./sections/FeaturedMembers";
import { SocietyHeroSection } from "./sections/HeroSection";
import { EventsSection } from "./sections/EventsSection";
import { CompetitionSection } from "./sections/CometitionSection";
// import { useParams } from "next/navigation";
// const SocietiesPage = () =>{
export default async function SocietyPage({
    params,
  }: {
    params: Promise<{ society: string }>
  }) {
    

    const society = (await params).society
    return (
        <>
        <Navbar />

        <SocietyHeroSection/>

        <div className="text-4xl font-bold flex justify-center my-4">
            <h2>Featured Members</h2>
        </div>
        <FeaturedMembersCarousel />

        <div className="text-4xl font-bold flex justify-center my-4">
            {/* <h2>Events By Society</h2> */}
            <h2>Events By {society}</h2>
        </div>
        <EventsSection/>

        <div className="text-4xl font-bold flex justify-center my-4">
            <h2>Competitons By Society</h2>
        </div>
        <CompetitionSection/>


        <Footer />
        </>
      )}
  
//   export default SocietiesPage;