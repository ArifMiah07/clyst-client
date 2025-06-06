import { TNotifyRoutes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { stylesForLi, stylesForLiSpan } from "../navbar.constants";




export const notifyRoutes: TNotifyRoutes[] = [
  {
    // icon: <Bell /> ,
    iconUrl: "/assets/images/icons/md-notify-ring.svg",
    label: "All notifications",
    text: "All notifications",
    route: "All notifications",
    altText: "All Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null,
    label: "Massage Notifications",
    text: "Massage Notifications",
    route: "Massage Notifications",
    altText: "users Massage Notifications page",
    children: null,
  },
  {
    // icon: <MessageCircle />,
    iconUrl: null,
    label: "Live Notifications",
    text: "Live Notifications",
    route: "Live Notifications",
    altText: "Live Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null,
    label: "Friends Notifications",
    text: "Friends Notifications",
    route: "Friends Notifications",
    altText: "users Friends Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null,
    label: "Groups Notifications",
    text: "Groups Notifications",
    route: "                  Groups Notifications                 ",
    altText: "users Groups Notifications page",
    children: null,
  },
];

// notifyLinks
export const notifyLinks = (
  <>
    {notifyRoutes.map((innerContent: TNotifyRoutes, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${(innerContent?.route)?.trim().split(" ").join("-").toLowerCase()}`}>
          <div className={`${stylesForLiSpan}`}>
            {innerContent?.iconUrl ? (
              <Image
                className="text-normal"//todo: add necessary classes later
                width={20}
                height={20}
                src={innerContent.iconUrl || "/placeholder.png"}
                alt={innerContent.altText || "icon image"}></Image>
            ) : (
              <span>{(innerContent.label).trim()[0].toUpperCase()}</span>
            )}
          </div>
        </Link>
      </li>
    ))}
  </>
);
