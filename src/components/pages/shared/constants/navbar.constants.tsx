"use client";
import Link from "next/link";

const stylesForLi =
  "flex third-layer-background w-8 h-8  items-center justify-center rounded-full border border-[#222FE9]";
const stylesForLiSpan = "heading-text-rgb";

export const notifyLinks = (
  <>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>R</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>M</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>L</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>N</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>O</span>
      </Link>
    </li>
  </>
);

const navLinksInnerContent = ["R", "M", "L", "N", "O", "S", "P", "K", "D", "Y"];

export const navLink = <>
{
    navLinksInnerContent.map((innerContent, index)=> <li key={index} className={`${stylesForLi}`}>
      <Link href={`/${(innerContent).toLowerCase()}`}>
        <span className={`${stylesForLiSpan}`}>{innerContent}</span>
      </Link>
    </li>)
}

</>

export const navLinks = (
  <>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>R</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>M</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>L</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>N</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>O</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>S</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>P</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>K</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>D</span>
      </Link>
    </li>
    <li className={`${stylesForLi}`}>
      <Link href={""}>
        <span className={`${stylesForLiSpan}`}>Y</span>
      </Link>
    </li>
  </>
);
