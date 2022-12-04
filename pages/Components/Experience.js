import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import experienceData from "./ExperienceData.json";
import { useRouter } from 'next/router';

export default function Experience() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/ExperiencePage")
  };

  return (
    <div className="flex flex-col m-2 sm:m-4">
      <div className="text-4xl flex border-2 max-w-sm sm:p-3 sm:mx-auto justify-center sm:text-5xl my-10 text-center bg-slate-100">
        <h1>Career</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:medium_screen_experience ">
        {experienceData.map((experience, index) => (
          <section
            key={index}
            className="flex flex-col mb-6 shadow-2xl border-4"
            onClick={handleClick}
          >
            <div className="flex flex-col p-2 space-y-2 sm:p-12 sm:space-x-4 items-center blue_background">
                <Avatar
                  alt="Asbin"
                  src={experience.cardTitle.imgSource}
                  sx={{
                    height: ["100px","150px"],
                    width: ["100px","150px"],
                    border: 2,
                    borderColor: "error.main",
                  }}
                />
                <div className="font-extrabold">
                  {experience.cardTitle.position ?? ""}
                </div>
                <div className="font-semibold">
                  {experience.cardTitle.company ?? ""}
                </div>
                <div>{experience.cardTitle.date ?? ""}</div>
                <div>{experience.cardTitle.location ?? ""}</div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
