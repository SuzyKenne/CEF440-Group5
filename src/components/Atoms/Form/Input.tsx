import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { InputProps } from "@/types/Input.type";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  onChangeText,
  onPress,
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
          placeholder={placeholder}
          onChangeText={onChangeText}
          onPress={onPress}
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
    left: 15,
    cursor: "pointer",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputWrapper: {
    marginTop: 20,
    borderRadius: 15,
    width: "100%",
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    color: "" + Colors.colorDark,
    marginBottom: 8,
  },
  input: {
   // paddingLeft: 50,
    fontSize: 16,
    fontWeight: "400",
    width: "100%",
    color: "" + Colors.colorPlaceholder,
    borderWidth: 1,
    borderColor: "" + Colors.colorPrimary,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Input;
