import Image from "next/image";
import React from "react";

export default function ExperienceCard({ data }) {
  return (
    <section className="border-4 border-r-8 m-4 p-2 flex flex-row max-w-screen-lg border-cyan-200">
      <div className="flex flex-col p-3">
        <div className="flex flex-row border-4 p-2 space-x-4 bg-slate-200">
          <div>
            <Image
              alt=""
              objectfit="contain"
              src={data.cardTitle.imgSource}
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="font-extrabold">
              {data.cardTitle.position ?? ""}
            </div>
            <div className="font-semibold">{data.cardTitle.company ?? ""}</div>
            <div>{data.cardTitle.date ?? ""}</div>
            <div>{data.cardTitle.location ?? ""}</div>
          </div>
        </div>

        <div className="p-2">
          {data.jobDescription.jobDuties.map((duty, index) => (
            <li key={index}>
              <div key={index}> {duty.jobDuty} </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
