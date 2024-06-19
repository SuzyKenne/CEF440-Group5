"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "react-native-feather";
import { StyleSheet, View } from "react-native";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    style={[
      styles.checkbox,
      className && styles[className as keyof typeof styles],
      props.state === "checked" && styles.checkedCheckbox,
    ]}
    {...props}
  >
    <CheckboxPrimitive.Indicator style={styles.checkboxIndicator}>
      <Check width={16} height={16} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const styles = StyleSheet.create({
  checkbox: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#4f46e5",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    cursor: "pointer",
  },
  checkedCheckbox: {
    backgroundColor: "#4f46e5",
    borderColor: "#4f46e5",
  },
  checkboxIndicator: {
    color: "white",
  },
});

export { Checkbox };
