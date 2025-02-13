import * as React from "react";
import CompetitionCard from "../components/CompetitionCard";
import { useEffect, useState } from "react";
import axios from "axios";

export function AllCompetitionsDisplaySection({id}) {
  console.log(id)
  const [competitions, setCompetitions] = useState([]);
  
  useEffect(() => {
    const fetchCompetitions = async () => {
      const result = await axios.get(`${process.env.BASE_URL}/competition/featuredCompetitions`,)
      setCompetitions(result.data)
    }

    fetchCompetitions()
  },[competitions])

  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-2 mx-auto max-w-5xl p-4 justify-center">
      {Array.from({ length: competitions.length }, (_, index) => (
        <div
          key={index}
          className={`mb-4 ${index % 2 === 0 ? "mt-0" : "mt-16"}`}
        >
          
          <CompetitionCard 
            id={competitions[index].id} 
            name={competitions[index].name}
            desc={competitions[index].description}
            logo={competitions[index].logo}
          />
        </div>
      ))}
    </div>
  );
}
