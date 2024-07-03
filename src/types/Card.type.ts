import React from "react";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";

export type CardProps = {
  title: string;
  onPress: string;
  image: string;
};
export type CardGeneralProps = {
  title: string;
  content: string;
  image?: string;
  icon?: "notifications-sharp" | "person-sharp" | "book-sharp";
  time?: string;
  color?: Style;
  bgColor?: Style;
  status?: "present" | "absent";
  nberPresence?: string;
  letter?: string;
};
//     | "person-chalkboard"
//     | "check-square";
