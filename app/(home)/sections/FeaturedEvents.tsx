import React, { useEffect, useState } from "react";
import { HomeCard } from "../components/Card";
import axios from "axios";
const FeaturedEvents = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    const fetchSocieties = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL + "/events/featured-events"}`
      );
      setFeaturedEvents(result.data);
    };
    fetchSocieties();
  }, []);

  return (
    <div className="p-4">
      {featuredEvents.length > 0 && (
        <>
          <h2 className="flex justify-center text-4xl font-bold">
            Featured Events
          </h2>
          <div className="mx-4 my-8 flex justify-center content-center flex-wrap gap-8">
            {featuredEvents.map((event) => (
              <HomeCard
                key={event.id}
                id={event.id}
                name={event.name}
                desc={event.description}
                logo=""
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedEvents;
