"use client";

import Link from "next/link";
import "../../../styles/customStyles.css";
import Image from "next/image";

export default function Navbar() {
  const notifyLinks = (
    <>
      <li>
        <Link href={""}>
          <span className="heading_text_bg">R</span>
        </Link>
      </li>
      <li>
        <Link href={""}>
          <span className="heading_text_bg">M</span>
        </Link>
      </li>
      <li>
        <Link href={""}>
          <span className="heading_text_bg">L</span>
        </Link>
      </li>
      <li>
        <Link href={""}>
          <span className="heading_text_bg">N</span>
        </Link>
      </li>
      <li>
        <Link href={""}>
          <span className="heading_text_bg">O</span>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="nav p-4">
      <div className=" flex gap-4 item-center justify-between">
        {/* logo */}
        <div>
          <Image
            width={60}
            height={30}
            src={'/assets/images/logos/Clyst.png'}
            alt={"logo image"}></Image>
          {/* <ul className="flex gap-2 items-center ">
                    {notifyLinks}
                </ul> */}
        </div>
        {/* notify */}
        <div>
          <ul className="flex cs  gap-2 items-center ">{notifyLinks}</ul>
        </div>
        {/* nav links */}
        <div>
          <ul className="flex gap-2 items-center ">{notifyLinks}</ul>
        </div>
        {/* user menu */}
        <div>
          <ul className="flex gap-2 items-center ">{notifyLinks}</ul>
        </div>
      </div>
    </nav>
  );
}
