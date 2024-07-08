import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { InputProps } from "@/types/Input.type";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChangeText,
  // onPress,
  secureTextEntry,
  iconName,
  size,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Ionicons size={size} name={iconName} style={styles.icon} />
        <TextInput
          style={styles.input}
          keyboardType={type}
          id={label}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          // onPress={onPress}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    color: "" + Colors.colorSecondary,
    bottom: 8,
    right: 40,
    cursor: "pointer",
    zIndex: -1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputWrapper: {
    position: "relative",
    marginTop: 40,
    width: "95%",
    alignItems: "center",
  },
  label: {
    position: "absolute",
    fontWeight: "600",
    fontSize: 16,
    color: "" + Colors.colorDark,
    paddingLeft: 0,
    left: 30,
    top: -22,
  },
  input: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "400",
    width: "90%",
    color: "" + Colors.colorDark,
    borderWidth: 1,
    borderColor: "" + Colors.colorPrimary,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Input;
