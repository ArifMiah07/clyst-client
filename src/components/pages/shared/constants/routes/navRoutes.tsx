import { TNotifyRoutes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { stylesForLi, stylesForLiSpan } from "../navbar.constants";



export const navRoutes: TNotifyRoutes[] = [
  {
    // icon: <Bell /> ,
    iconUrl: "/assets/images/icons/md-home.svg",
    label: "Home",
    text: "Home",
    route: "Home",
    altText: "Home page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: '/assets/images/icons/md-friends.svg',
    label: "all friends",
    text: "all friends",
    route: "all friends",
    altText: "users all friends page",
    children: null,
  },
  {
    // icon: <MessageCircle />,
    iconUrl: '/assets/images/icons/md-groups.svg' ,
    label: "all groups",
    text: "all groups",
    route: "all groups",
    altText: "all groups page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: '/assets/images/icons/md-notebooks.svg' ,
    label: "all notebooks",
    text: "all notebooks",
    route: "all notebooks",
    altText: "users all notebooks page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: '/assets/images/icons/md-create-post.svg' ,
    label: "create new post",
    text: "create new post",
    route: "create new post",
    altText: "users create new post page",
    children: null,
  },
  {
    // icon: <Bell /> ,
    iconUrl: null ,
    label: "All notifications",
    text: "All notifications",
    route: "All notifications",
    altText: "All Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null ,
    label: "Massage Notifications",
    text: "Massage Notifications",
    route: "Massage Notifications",
    altText: "users Massage Notifications page",
    children: null,
  },
  {
    // icon: <MessageCircle />,
    iconUrl: null ,
    label: "Live Notifications",
    text: "Live Notifications",
    route: "Live Notifications",
    altText: "Live Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null ,
    label: "Friends Notifications",
    text: "Friends Notifications",
    route: "Friends Notifications",
    altText: "users Friends Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: null ,
    label: "Groups Notifications",
    text: "Groups Notifications",
    route: "Groups Notifications",
    altText: "users Groups Notifications page",
    children: null,
  },
  {
    // icon: <Bell /> ,
    iconUrl: null ,
    label: "All notifications",
    text: "All notifications",
    route: "All notifications",
    altText: "All Notifications page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: '/assets/images/icons/md-see-more.svg',
    label: "see more nav routes",
    text: "see more nav routes",
    route: "see more nav routes",
    altText: "users see more nav routes page",
    children: null,
  },
  {
    // icon: <MessageCircle />,
    iconUrl: '/assets/images/icons/md-see-previous.svg' ,
    label: "see previous nav routes",
    text: "see previous nav routes",
    route: "see previous nav routes",
    altText: "see previous nav routes page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: '/assets/images/icons/md-see-next.svg' ,
    label: "see next nav routes",
    text: "see next nav routes",
    route: "  see next nav routes   ",
    altText: "users see next nav routes page",
    children: null,
  },
];


// navLinks
export const navLinks = (
  <>
    {navRoutes.map((innerContent: TNotifyRoutes, index: number) => (
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