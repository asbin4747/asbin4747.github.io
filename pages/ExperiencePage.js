import * as React from "react";
import ExperienceCard from "./Components/ExperienceCard";
import experienceData from "./Components/ExperienceData.json";

export default function ExperiencePage() {
  return (
    <div>
      {experienceData.map((experience, index) => (
        <div key = {index} className="flex justify-center">
          <ExperienceCard key={index} data={experienceData[index]} />
        </div>
      ))}
    </div>
  );
}
