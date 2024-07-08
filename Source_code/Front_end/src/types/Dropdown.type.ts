import { ChangeEvent } from "react";

export type DropdownOption = {
  label: string;
  value: string | number;
};
export type DropdownProps = {
  label: string;
  options: DropdownOption[];
  value: string;
  onValueChange: (newValue: string) => void;
  style?: any;
};
