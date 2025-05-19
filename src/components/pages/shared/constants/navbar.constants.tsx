"use client";
import { Magnet, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Bell } from 'lucide-react';



// styles
const stylesForLi: string =
  "flex third-layer-background w-8 h-8  items-center justify-center rounded-full border border-[#222FE9]";
const stylesForLiSpan: string = "heading-text-rgb";

// contents
const notifyLinksInnerContents: string[] = ["R", "M", "L", "N", "O"];


type TNotifyRoutes = {
  icon?: ReactNode;
  label: string;
  text: string;
  route?: string;
  altText?: string;
  children?: ReactNode | null;
};

const notifyRoutes : TNotifyRoutes[] = [
    {
        icon: <Bell /> ,
        label: 'Clyster',
        text: 'Clyster',
        route: 'clyster',
        altText: 'clyster messenger app',
        children: null,
    },
    {
        icon: <Magnet />,
        label: 'Profile',
        text: 'Profile',
        route: 'profile',
        altText: 'users profile page',
        children: null,
    },
    {
        icon: <MessageCircle />,
        label: 'Clyster',
        text: 'Clyster',
        route: 'clyster',
        altText: 'clyster messenger app',
        children: null,
    },
    {
        icon: <Magnet />,
        label: 'Profile',
        text: 'Profile',
        route: 'profile',
        altText: 'users profile page',
        children: null,
    },
];
const menuRoutes : TNotifyRoutes[] = [
    {
        icon: <MessageCircle />,
        label: 'Clyster',
        text: 'Clyster',
        route: 'clyster',
        altText: 'clyster messenger app',
        children: null,
    },
    {
        icon: <Magnet />,
        label: 'Profile',
        text: 'Profile',
        route: 'profile',
        altText: 'users profile page',
        children: null,
    },
    {
        icon: <MessageCircle />,
        label: 'Clyster',
        text: 'Clyster',
        route: 'clyster',
        altText: 'clyster messenger app',
        children: null,
    },
    {
        icon: <Magnet />,
        label: 'Profile',
        text: 'Profile',
        route: 'profile',
        altText: 'users profile page',
        children: null,
    },
];
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
    {
        notifyRoutes.map((innerContent:TNotifyRoutes , index: number) => (
        <li key={index} className={`${stylesForLi}`}>
            <Link href={`/${innerContent.route}`}>
            <span className={`${stylesForLiSpan}`}>{innerContent.icon}</span>
            </Link>
        </li>
        ))
    }
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
    {
        menuRoutes.map((innerContent:TNotifyRoutes , index: number) => (
        <li key={index} className={`${stylesForLi}`}>
            <Link href={`/${innerContent.route}`}>
            <span className={`${stylesForLiSpan}`}>{innerContent.icon}</span>
            </Link>
        </li>
        ))
    }
  </>
);
