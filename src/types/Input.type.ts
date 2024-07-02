import React from "react";
import { TextInputProps } from "react-native";

export type InputProps = {
  label: string;
  onChangeText: (text: string) => void;
  value?: string | number;
  type?: "email-address" | "phone-pad";
  secureTextEntry?: boolean;
  placeholder?: string;
  // onPress?: () => void;
  iconName?: "eye";
  size?: number;
} & Omit<TextInputProps, "onChangeText">;
