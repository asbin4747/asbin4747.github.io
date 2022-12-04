import * as React from "react";
import ExperienceCard from "./Components/ExperienceCard";
import experienceData from "./Components/ExperienceData.json";

export default function ExperiencePage() {
  return (
    <div>
        <div className="flex justify-center">
          <ExperienceCard />
        </div>
    </div>
  );
}
