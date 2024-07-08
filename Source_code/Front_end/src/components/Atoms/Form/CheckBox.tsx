import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

interface CheckboxProps {
  label?: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  style?: any;
  checkedIcon?: string;
}

const CheckBox: FC<CheckboxProps> = ({
  label,
  value,
  onValueChange,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onValueChange(!value)}
    >
      <View style={styles.checkboxContainer}>
        {value && (
          <Ionicons
            name="checkmark-sharp"
            size={20}
            color={Colors.colorGreen}
          />
        )}
        {/* {value && <View style={styles.checkbox} />} */}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    backgroundColor: Colors.colorPrimary,
    borderRadius: 4,
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
  },
});

export default CheckBox;
