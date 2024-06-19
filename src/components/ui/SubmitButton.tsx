import React from "react";
import { ReactNode } from "react";
import { Button, ButtonProps } from "./button";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { cn } from "../../lib/utils";

interface iSubmitProps extends ButtonProps {
  children: ReactNode;
  isError?: boolean;
  submittingText?: string | ReactNode;
  isLoading?: boolean;
}

const SubmitButton = ({
  children,
  className,
  submittingText,
  isLoading,
  ...props
}: iSubmitProps) => {
  const navigation = useNavigation();
  const isSubmitting = isLoading ?? navigation.state.current === "submitting";

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      style={[
        styles.button,
        isSubmitting && styles.disabledButton,
        className && styles[className],
      ]}
      {...props}
    >
      {isSubmitting ? submittingText || "loading ..." : children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
});

export default SubmitButton;
