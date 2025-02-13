// 'use client'
import { useEffect, useState } from "react";
import axios from "axios";

import { CompetitionSectionComponent } from "../components/CompetitionSectionComponent";
export const CompetitionSection = ({id}: {id: string}) => {
  
  const [societyName, setSocietyName] = useState("")
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/competition/getCompetitionBySocietyId?societyId=${id}`
      );
      setCompetitions(result.data);
    };
    const fetchSociety = async () => {
      const result = await axios.get(`${process.env.BASE_URL}/societies/get-society-by-id?societyId=${id}`)
      setSocietyName(result.data.name)

    }
    fetchSociety()
    fetchCompetitions();
  }, []);

  return (
    <>
    { competitions.length > 0 &&

      <div className="text-4xl font-bold flex justify-center my-4">
        <h2>Competitons By {societyName}</h2>
      </div>
    }
    {competitions && competitions.map((competition => ( 

      <CompetitionSectionComponent key={competition.id} competition={competition}/>
    )))} 
      
    </>
  );
};
