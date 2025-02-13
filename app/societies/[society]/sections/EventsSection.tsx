import { useEffect, useState } from "react";
import axios from "axios";
import { EventsSectionComponent } from "../components/EventsSectionComponent";
// import { fetchEvents } from "../fetching";

export const EventsSection = ({ id }) => {
  const [societyName, setSocietyName] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/events/getEventBySocietyId?societyId=${id}`
      );
      if (result && result.data) {
        setEvents(result.data);
      }
    };
    const fetchSociety = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/societies/get-society-by-id?societyId=${id}`
      );
      setSocietyName(result.data.name);
    };
    fetchSociety();
    fetchEvents();
  }, [events]);

  return (
    <>
      {events.length > 0 && (
        <div className="text-4xl font-bold flex justify-center my-4">
          <h2>Events By {societyName}</h2>
        </div>
      )}
      {events &&
        events.map((event, i) => (
          <EventsSectionComponent key={i} event={event} />
        ))}
    </>
  );
};
