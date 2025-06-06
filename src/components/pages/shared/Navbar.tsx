"use client";

import "../../../styles/customStyles.css";
import Image from "next/image";
import { notifyLinks } from "./constants/routes/notifyRoutes";
import { navLinks } from "./constants/routes/navRoutes";
import { menuBarLinks } from "./constants/routes/menuRoutes";

export default function Navbar() {

  /** as same styles are repeatedly using so better make them a reusable variable  */
  const commonStylesNavSections =
    "second-layer-background rounded-full flex items-center justify-center p-3  ";
  const commonStylesForUl =
    "w-full h-full flex gap-2 items-center justify-center ";

  return (
    <nav className="nav flex items-center justify-center">
      <div className="container flex gap-4 item-center justify-between p-4">
        {/* logo */}
        <div className={`${commonStylesNavSections} w-40 `}>
          <Image
            width={60}
            height={30}
            src={"/assets/images/logos/Clyst.png"}
            alt={"logo image"}></Image>
        </div>
        {/* notify */}
        <div className={`${commonStylesNavSections} w-fit`}>
          <ul className={`${commonStylesForUl}`}>{notifyLinks}</ul>
        </div>
        {/* nav links */}
        <div className={`${commonStylesNavSections} w-fit`}>
          <ul className={`${commonStylesForUl}`}>{navLinks}</ul>
        </div>
        {/* user menu */}
        <div className={`${commonStylesNavSections} w-fit`}>
          <ul className={`${commonStylesForUl}`}>{menuBarLinks}</ul>
        </div>
      </div>
    </nav>
  );
}
