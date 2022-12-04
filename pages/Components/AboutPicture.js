import * as React from "react";
import AboutSectionText from "./AboutSectionText";

export default function AboutImage() {
  return (
    <div className="bg-cover m-2 sm:m-0 bg-no-repeat sm:bg-[url('../public/aboutBackground.jpeg')] sm:p-32">
      <AboutSectionText />
    </div>
  );
}
