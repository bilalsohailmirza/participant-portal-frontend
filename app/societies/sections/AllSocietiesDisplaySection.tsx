import * as React from "react";
import { SocietyCard } from "../components/SocietyCard";

export function AllSocietiesDisplaySection({ numberOfCards = 10 }) {
  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-2 mx-auto max-w-5xl p-4 justify-center">
      {Array.from({ length: numberOfCards }, (_, index) => (
        <div
          key={index}
          className={`mb-4 ${index % 2 === 0 ? "mt-0" : "mt-16"}`}
        >
          <SocietyCard />
        </div>
      ))}
    </div>
  );
}
