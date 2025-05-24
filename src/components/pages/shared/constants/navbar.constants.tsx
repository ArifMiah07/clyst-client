"use client";

// styles
export const stylesForLi: string =
  "flex third-layer-background w-8 h-8  items-center justify-center rounded-full border border-[#222FE9]";
export const stylesForLiSpan: string = "heading-text-rgb";

//
// user type
export type TUser = {
  gender: "male" | "female" | "third";
  role: "user" | "admin" | "super-admin" | "developer" | "designer";
};
//
interface IGenderIcons {
  male: string | null;
  female: string | null;
  third: string | null;
}
interface userDashboardIcons {
  user: string | null;
  admin: string | null;
  "super-admin": string | null;
  developer: string | null;
  designer: string | null;
}




// todo: update and use nextAuth
export const user: TUser = {
  gender: "female",
  role: "admin",
};

export const userDashboardIcons: userDashboardIcons = {
  user: '/assets/images/icons/md-user-dashboard.svg',
  admin: '/assets/images/icons/md-user-dashboard.svg',
  "super-admin": '/assets/images/icons/md-user-dashboard.svg',
  developer: '/assets/images/icons/md-user-dashboard.svg',
  designer: '/assets/images/icons/md-user-dashboard.svg',
};
export const genderIcons: IGenderIcons = {
  male: "/assets/images/icons/md-male-profile.svg",
  female: "/assets/images/icons/md-female-profile.svg",
  third: null,
};
