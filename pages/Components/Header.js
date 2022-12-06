import React from "react";
import Link from "next/link";
import Avatar from "@mui/joy/Avatar";

function Header() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <div className="gradient_background flex sm:flex-row flex-col text-white sm:text-2xl font-base">
        <nav className="flex flex-col sm:flex-row ">
          <div className=" flex sm:mx-40 sm:my-8 mt-3 justify-center">
            <Link href="/">
              <div>
                <Avatar
                  alt="Asbin"
                  src={prefix + "/pic.jpg"}
                  size="lg"
                  sx={{
                    height: "100px",
                    width: "100px",
                    border: 2,
                    borderColor: "error.main",
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex pt-4">
            <ul className="flex relative pb-3 m-auto space-x-3 sm:space-x-20 justify-between items-center sm:font-bold">
              <li>
                <Link href="/">
                  <button className="small_heading_box p-2">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/ExperiencePage">
                  <button className="small_heading_box p-2">
                    Experience
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/ProjectsPage">
                  <button className="small_heading_box p-2">
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <button className="small_heading_box p-2">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
