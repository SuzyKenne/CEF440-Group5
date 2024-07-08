import React, { FC, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onValueChange: (newValue: string) => void;
  style?: any;
}

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  value,
  onValueChange,
  style,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <ThemedView style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsModalVisible(true)}
      >
        {/* <ThemedText type="default" style={styles.label}>
          {label}
        </ThemedText> */}
        <ThemedView style={styles.selectedOptionContainer}>
          <ThemedText style={styles.selectedOptionText}>
            {selectedOption?.label || `${label}`}
          </ThemedText>
          <FontAwesome name="angle-down" size={20} color="#999" />
        </ThemedView>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsModalVisible(false)}
        >
          <ThemedView style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionContainer}
                  onPress={() => {
                    onValueChange(item.value);
                    setIsModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </ThemedView>
        </TouchableOpacity>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  dropdown: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.colorSecondary,
    borderRadius: 4,
    maxWidth: "100%",
    width: "auto",
    backgroundColor: Colors.colorWhite,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  selectedOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedOptionText: {
    fontSize: 16,
    color: "#666",
    marginRight: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "80%",
    maxHeight: "80%",
    overflow: "hidden",
  },
  optionContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Dropdown;
