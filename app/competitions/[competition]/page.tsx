"use client";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CompetitionHeroSection } from "./sections/HeroSection";
// import { EventsDetailsSection } from "./sections/EventdetailsSection";
import CompetitionDescriptionSection from "./sections/CompetitionDescriptionSection";
// import EventRulesSection from "./sections/EventRulesSection";
import { CompetitionRegistrationForm } from "./components/CompetitionRegistrationForm";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function EventPage({}) {

  const competitionId = usePathname().slice(14);
  const authToken = Cookies.get('authToken');
  // console.log("competition ID: ", competitionId)
  return (
    <>
      <Navbar />

      <CompetitionHeroSection id={competitionId} />

      {/* <EventsDetailsSection/> */}
      <CompetitionDescriptionSection id={competitionId} />

      {/* <EventRulesSection/> */}

      <CompetitionRegistrationForm id={competitionId} token={authToken} />

      <Footer />
    </>
  );
}
// export default EventsPage;
