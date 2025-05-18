"use client";

import Link from "next/link";
import "../../../styles/customStyles.css";
import Image from "next/image";
import { navLink, navLinks, notifyLinks } from "./constants/navbar.constants";

export default function Navbar() {
  

  return (
    <nav className="nav flex items-center justify-center">
      <div className="container flex gap-4 item-center justify-between p-4">
        {/* logo */}
        <div className="w-40 second-layer-background rounded-full flex items-center justify-center p-3  ">
          <Image
            width={60}
            height={30}
            src={"/assets/images/logos/Clyst.png"}
            alt={"logo image"}></Image>
        </div>
        {/* notify */}
        <div className="w-fit second-layer-background rounded-full flex items-center justify-center p-3 ">
          <ul className="w-full h-full flex gap-2 items-center justify-center  ">
            {notifyLinks}
          </ul>
        </div>
        {/* nav links */}
        <div className="w-fit second-layer-background rounded-full flex items-center justify-center p-3 ">
          <ul className="w-full h-full flex gap-2 items-center justify-center  ">
            {navLink}
          </ul>
        </div>
        {/* user menu */}
        <div className="w-fit second-layer-background rounded-full flex items-center justify-center p-3 ">
          <ul className="w-full h-full flex gap-2 items-center justify-center  ">
            {notifyLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}
