import axios from "axios";
import React, { useEffect, useState } from "react";

const RegistrationsSection = ({ token }:{token: string}) => {
  
  const [events, setEvents] = useState([]);
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/users/getCompetitions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCompetitions(result.data);
    };
    const fetchEvents = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/users/getEvents`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEvents(result.data);
    };
    fetchCompetitions();
    fetchEvents();
  }, []);
  return (
    <div className="w-full p-5 flex-col gap-4">
      {competitions && competitions.length > 0 ? (
        <div className="">
          <h1 className="text-2xl font font-extrabold">
            Registered Competitions
          </h1>
          {competitions.map((comp) => (
            <div key={comp.competitionName} className="p-4 m-2 bg-gray-200 rounded-xl">
              <h1>
                <span className="text-lg font-bold">Competition Name:</span>
                {comp.competitionName}
              </h1>
              <h1>
                <span className="text-lg font-bold">Competition Date::</span>
                {comp.competitionDate}
              </h1>
              <h1>
                <span className="text-lg font-bold">Competition Time:</span>
                {comp.competitionTime}
              </h1>
            </div>
          ))}
        </div>
      ) : <></>}
      {events.length > 0 ? (
        <div className="">
          <h1 className="text-2xl font font-extrabold">Registered Events</h1>
          {events.map((event) => (
            <div  key={event.eventName} className="p-4 m-2 bg-gray-200 rounded-xl">
              <h1>
                <span className="text-lg font-bold">Event Name:</span>{" "}
                {event.eventName}
              </h1>
              <h1>
                <span className="text-lg font-bold">Event Date::</span>{" "}
                {event.eventDate}
              </h1>
              <h1>
                <span className="text-lg font-bold">Event Time:</span>{" "}
                {event.eventTime}
              </h1>
            </div>
          ))}
        </div>
      ): <></>}

      {events.length == 0 && competitions.length == 0 ? (
        <p>You haven&apos;t been registered in any event or competition</p>
      ): <></>
      }
    </div>
  );
};

export default RegistrationsSection;
