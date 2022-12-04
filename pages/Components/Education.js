import * as React from "react";
import { Avatar } from "@mui/material";

export default function Education() {
  return (
     <div className="flex flex-row space-x-4 m-2 sm:space-x-10 mt-6 border-4 p-2 shadow-2xl blue_background sm:education_card">
      <div className="self-center">
        <Avatar src="/CSUNS.svg.png" sx={{ height: ['50px', '150px'], width: ['50px', '150px'], border: 2, borderColor: 'error.main'}}/>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="font-bold text-lg">Education</div>
        <div>Bachelor in Computer Science</div>
        <div className="education_item_border">California State University</div>
        <div className="education_item_border">Cum Laude Honors</div>
      </div>
    </div>
  );
}
