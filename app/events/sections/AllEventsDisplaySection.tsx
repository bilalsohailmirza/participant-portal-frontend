import * as React from "react";
import { EventCard } from "../components/EventCard";
import { useEffect, useState } from "react";
import axios from "axios";

export function AllEventsDisplaySection({ }) {

  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchSocietyDetails = async () => {
      const result = await axios.get(`${process.env.BASE_URL}/events/featured-events`,)
      setEvents(result.data)
    }

    fetchSocietyDetails()
  },[events])

  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-2 mx-auto max-w-5xl p-4 justify-center">
      {Array.from({ length: events.length }, (_, index) => (
        <div
          key={index}
          className={`mb-4 ${index % 2 === 0 ? "mt-0" : "mt-16"}`}
        >
          
          <EventCard 
            id={events[index].id} 
            name={events[index].name}
            desc={events[index].description}
            logo={events[index].logo}
          />
        </div>
      ))}
    </div>
  );
}
