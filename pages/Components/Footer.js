import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer_background flex flex-col flex-wrap max-w-screen">
      <section className="flex p-3 justify-center gap-x-10 border footer_top_bottom">
        <div className="font-semibold text-lg">
          <span>Get connected on social networks</span>
        </div>
        <div className="flex flex-row gap-x-4">
            <div>
         <Link href="https://www.linkedin.com/in/asbindahal4747" passHref={true}>
         <LinkedInIcon color="primary" fontSize="large" />
         </Link>
         </div>
         
         <div>
         <Link href="https://github.com/asbin4747" passHref={true}>
         <GitHub fontSize="large"/>
         </Link>
         </div>
        </div>
      </section>

      <div className="text-center p-2 border footer_top_bottom ">
        © {new Date().getFullYear()} Copyright:
        <Link href="/">
        <div className="font-semibold underline">
          Asbin Dahal
        </div>
        </Link>
      </div>
    </footer>
  );
}
