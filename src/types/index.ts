import { ReactNode } from "react";

export type TNotifyRoutes = {
  icon?: ReactNode;
  iconUrl?: string | null;
  label: string;
  text: string;
  route?: string;
  altText?: string;
  children?: ReactNode | null;
};
