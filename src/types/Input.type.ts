import React from "react";
import { TextInputProps } from "react-native";

export type InputProps = {
  label: string;
  type?: "email-address" | "phone-pad";
  secureTextEntry?: boolean;
  placeholder?: string;
  value?: string | number;
  onChangeText: (text: string) => void;
  // onPress?: () => void;
  iconName?: "eye";
  size?: number;
} & Omit<TextInputProps, "onChangeText">;
