import { TNotifyRoutes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { genderIcons, stylesForLi, stylesForLiSpan, user, userDashboardIcons } from "../navbar.constants";



// notify routes
export const menuRoutes: TNotifyRoutes[] = [
  {
    // icon: <Bell /> ,
    iconUrl: '/assets/images/icons/md-clyster-messenger.svg',
    label: "Clyster messenger",
    text: "Clyster messenger",
    route: "Clyster messenger",
    altText: "Clyster messenger page",
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: genderIcons[user.gender],
    // iconUrl: user.gender === 'male' ? '/assets/images/icons/md-male-profile.svg' : user.gender === 'female' ? '/assets/images/icons/md-female-profile.svg' : null,
    label: "User profile",
    text: "User profile",
    route: "User profile",
    altText: "users User profile page",
    children: null,
  },
  {
    // icon: <MessageCircle />,
    iconUrl: userDashboardIcons[user.role],
    label:  (`${user.role} Dashboard`),
    text:  (`${user.role} Dashboard`),
    route:  (`${user.role} Dashboard`),
    altText: (`${user.role} Dashboard Page`),
    children: null,
  },
  {
    // icon: <Magnet />,
    iconUrl: '/assets/images/icons/md-global-menu.svg',
    label: "Global Menu",
    text: "Global Menu",
    route: "Global Menu",
    altText: "Global Menu page",
    children: null,
  },
];



// User Specific menu bar
export const menuBarLinks = (
  <>
    {menuRoutes.map((innerContent: TNotifyRoutes, index: number) => (
      <li key={index} className={`${stylesForLi}`}>
        <Link href={`/${(innerContent?.route)?.split(" ").join("-").toLowerCase()}`}>
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