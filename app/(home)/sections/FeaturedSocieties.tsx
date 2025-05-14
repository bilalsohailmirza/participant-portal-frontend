import React, { useEffect, useState } from "react";
import { HomeCard } from "../components/Card";
import axios from "axios";

const FeaturedSocieties = () => {
  const [featuredSocieties, setFeaturedSocieties] = useState([]);

  useEffect(() => {
    const fetchSocieties = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL + "/societies/get-featured-societies"}`
      );
      setFeaturedSocieties(result.data.slice(0, 6));
    };
    fetchSocieties();
  }, []);

  return (
    <div className="p-4">
      {featuredSocieties.length > 0 && (
        <>
          <h2 className="flex justify-center text-4xl font-bold">
            Featured Societies
          </h2>
          <div className="mx-4 my-8 flex justify-center content-center flex-wrap gap-8">
            {featuredSocieties.map((society) => (
              <HomeCard
                key={society.id}
                id={society.id}
                name={society.name}
                desc={society.description}
                logo={society.logo}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedSocieties;
