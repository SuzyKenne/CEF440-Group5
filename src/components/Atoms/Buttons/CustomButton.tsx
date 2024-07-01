import React from "react";
import { Colors } from "@/constants/Colors";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { CustomButtonProps } from "@/types/CustomButton.type";

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  // iconLeft,
  // iconRight,
  style,
  textStyle,
  disabled,
  activeOpacity,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "" + Colors.colorPrimary,
    paddingVertical: 8,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderWidth: 0,
  },
  disabledButton: {
    marginTop: 20,
    backgroundColor: `${Colors.colorDisable}`,
    paddingVertical: 8,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderWidth: 0,
  },
  buttonText: {
    color: "" + Colors.colorWhite,
    fontSize: 20,
  },
});

export default CustomButton;
