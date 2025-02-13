import { useState, useEffect } from "react";
import { SocietyCard } from "../components/SocietyCard";
import axios from "axios";

export function AllSocietiesDisplaySection({}) {
  const [featuredSocieties, setFeaturedSocieties] = useState([]);
  // let index = 1;
  useEffect(() => {
    const fetchSocieties = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL + "/societies/get-featured-societies"}`
      );
      setFeaturedSocieties(result.data);
    };
    fetchSocieties();
  }, []);

  return (
    // <>
    <div className="grid grid-cols-2 gap-x-48 gap-y-8 mx-auto max-w-5xl p-4 justify-center">
      {featuredSocieties.map((society) => (
        <div
        key={society.id}
        // className=
        >
          <SocietyCard
            
            id={society.id}
            name={society.name}
            desc={society.description}
            logo={society.logo}
          />
        </div>
      ))}
    </div>
    // </>
  );
}
