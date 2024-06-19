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
      {/* {iconLeft} */}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {/* {iconRight} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "" + Colors.colorPrimary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderWidth: 0,
  },
  disabledButton: {
    marginTop: 20,
    backgroundColor: `${Colors.colorDisable}`,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderWidth: 0,
  },
  buttonText: {
    color: "" + Colors.colorWhite,
    fontSize: 20,
  },
});

export default CustomButton;
