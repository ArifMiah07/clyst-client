"use client";
import { Magnet, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Bell } from "lucide-react";
import Image from "next/image";

// styles
const stylesForLi: string =
  "flex third-layer-background w-8 h-8  items-center justify-center rounded-full border border-[#222FE9]";
const stylesForLiSpan: string = "heading-text-rgb";

// contents
const notifyLinksInnerContents: string[] = ["R", "M", "L", "N", "O"];

type TNotifyRoutes = {
  icon?: ReactNode;
  iconUrl?: string | null;
  label: string;
  text: string;
  route?: string;
  altText?: string;
  children?: ReactNode | null;
};

const notifyRoutes: TNotifyRoutes[] = [
  {
    // icon: <Bell /> ,
    iconUrl: "/assets/images/icons/md-notify-ring.svg",
    label: "Notify Ring",
    text: "Notify Ring",
    route: "Notify Ring",
    altText: "Notify Ring messenger app",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null,
    label: "Profile",
    text: "Profile",
    route: "profile",
    altText: "users profile page",
    children: null,
  },
  {
    // icon: <MessageCircle />,
    iconUrl: null,
    label: "Clyster",
    text: "Clyster",
    route: "clyster",
    altText: "clyster messenger app",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null,
    label: "Profile",
    text: "Profile",
    route: "profile",
    altText: "users profile page",
    children: null,
  },
];
const menuRoutes: TNotifyRoutes[] = [
  {
    icon: <MessageCircle />,
    label: "Clyster",
    text: "Clyster",
    route: "clyster",
    altText: "clyster messenger app",
    children: null,
  },
  {
    icon: <Magnet />,
    label: "Profile",
    text: "Profile",
    route: "profile",
    altText: "users profile page",
    children: null,
  },
  {
    icon: <MessageCircle />,
    label: "Clyster",
    text: "Clyster",
    route: "clyster",
    altText: "clyster messenger app",
    children: null,
  },
  {
    icon: <Magnet />,
    label: "Profile",
    text: "Profile",
    route: "profile",
    altText: "users profile page",
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
    {notifyRoutes.map((innerContent: TNotifyRoutes, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${(innerContent?.route)?.split(" ").join("-").toLowerCase()}`}>
          <div className={`${stylesForLiSpan}`}>
            {innerContent?.iconUrl ? (
              <Image
                className="text-black"
                width={20}
                height={20}
                src={innerContent.iconUrl || "/placeholder.png"}
                alt={innerContent.altText || "icon image"}></Image>
            ) : (
              <span>{innerContent.label[0].toUpperCase()}</span>
            )}
          </div>
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
    {menuRoutes.map((innerContent: TNotifyRoutes, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${innerContent.route}`}>
          <span className={`${stylesForLiSpan}`}>{innerContent.icon}</span>
        </Link>
      </li>
    ))}
  </>
);
