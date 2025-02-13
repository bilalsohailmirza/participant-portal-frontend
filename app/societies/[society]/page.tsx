"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SocietyHeroSection } from "./sections/HeroSection";
import { EventsSection } from "./sections/EventsSection";
import { CompetitionSection } from "./sections/CometitionSection";
import { usePathname } from "next/navigation";

export default function SocietyPage({
  // params,
}){
  // const society = (await params).society;
  const societyId = usePathname().slice(11);

  // const [societyDetails, setSocietyDetails] = useState();

  // const path = "societies/get-society-by-id"
  
  // useEffect(() => {
    
    // const fetchSocietyDetails = async () => {
        // try {
        // const result = await axios.get(`${process.env.BASE_URL}/${path}?societyId=${society}`)
        // console.log(result)
        // setSocietyDetails(result.data)
        // console.log(result.data)
        // console.log(societyDetails)
      // } catch(err) {
        // console.log(err)  
      // }
    // }
    // fetchSocietyDetails()
  // },[societyDetails])
  

  return (
    <>
      <Navbar />

      <SocietyHeroSection id={societyId} />

      <div className="text-4xl font-bold flex justify-center my-4">
        <h2>About the Society</h2>
      </div>
      {/* <FeaturedMembersCarousel /> */}

      <EventsSection id={societyId} />

     
      <CompetitionSection id={societyId} />

      <Footer />
    </>
  );
}

//   export default SocietiesPage;
