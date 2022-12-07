import React from "react";
import experienceData from "./ExperienceData.json";

export default function ExperienceCard() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="flex flex-col">
      {experienceData.map((experience, index) => (
        <section
          key={index}
          className="border-4 border-r-8 m-4 p-2 flex flex-row max-w-screen-lg border-cyan-200 text-justify"
        >
          <div className="flex flex-col p-3">
            <div className="flex flex-row border-4 p-2 space-x-4 bg-slate-200">
              <div>
                <img
                  alt=""
                  objectfit="contain"
                  src={prefix + experience.cardTitle.imgSource}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <div className="font-extrabold">
                  {experience.cardTitle.position ?? ""}
                </div>
                <div className="font-semibold">
                  {experience.cardTitle.company ?? ""}
                </div>
                <div>{experience.cardTitle.date ?? ""}</div>
                <div>{experience.cardTitle.location ?? ""}</div>
              </div>
            </div>
            <div className="p-2">
              {experience.jobDescription.jobDuties.map((duty, index) => (
                <li key={index}>
                  <div key={index}> {duty.jobDuty} </div>
                </li>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
