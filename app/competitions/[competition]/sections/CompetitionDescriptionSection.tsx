import Image from "next/image";
import procom from "@/assets/procom.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
export default function CompetitionDescriptionSection({ id }: { id: string }) {
  const [eventAbout, setEventAbout] = useState("");
  // const [eventDescription, setEventDescription] = useState("");
  const [competitionDate, setCompetitionDate] = useState("");
  const [competitionTime, setCompetitionTime] = useState("");

  useEffect(() => {
    const fetchCompetition = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/competition/getDetails?id=${id}`
      );

      if(result.data){
        setEventAbout(result.data.about)
        setCompetitionDate(result.data.date)
        setCompetitionTime(result.data.time)
      }
        // setEventDescription(result.data.description)
       
}
      fetchCompetition();
  
    
  }, []);
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About the Event
              </h2>

              <p>{eventAbout}</p>
            </div>
          </main>
        </div>
        <div className="">
          <h2 className="my-6 text-xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-2xl">
            Event Date: {competitionDate}
          </h2>
          <h2 className="my-6 text-xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-2xl">
            Event Time: {competitionTime}
          </h2>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image src={procom} alt="procom" />
      </div>
    </div>
  );
}
