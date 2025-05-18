"use client";
import Link from "next/link";

// styles
const stylesForLi: string =
  "flex third-layer-background w-8 h-8  items-center justify-center rounded-full border border-[#222FE9]";
const stylesForLiSpan: string = "heading-text-rgb";

// contents
const notifyLinksInnerContents: string[] = ["R", "M", "L", "N", "O"];
const navLinksInnerContent: string[] = [
  "R",
  "M",
  "L",
  "N",
  "O",
  "S",
  "P",
  "K",
  "D",
  "Y",
];
const menuBarLinksInnerContent: string[] = ["C", "P", "D", "M", "O"];

// utils
// notifyLinks
export const notifyLinks = (
  <>
    {notifyLinksInnerContents.map((innerContent: string, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${(innerContent.toLowerCase())}`}>
          <span className={`${stylesForLiSpan}`}>{innerContent}</span>
        </Link>
      </li>
    ))}
  </>
);

// navLinks
export const navLinks = (
  <>
    {navLinksInnerContent.map((innerContent: string, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${innerContent.toLowerCase()}`}>
          <span className={`${stylesForLiSpan}`}>{innerContent}</span>
        </Link>
      </li>
    ))}
  </>
);

// User Specific menu bar
export const menuBarLinks = (
  <>
    {menuBarLinksInnerContent.map((innerContent: string, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${(innerContent.toLowerCase())}`}>
          <span className={`${stylesForLiSpan}`}>{innerContent}</span>
        </Link>
      </li>
    ))}
  </>
);
