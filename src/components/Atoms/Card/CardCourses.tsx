import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { CardCoursesProps } from "@/types/Card.type";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckBox from "../Form/CheckBox";
const CardCourses: React.FC<CardCoursesProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ThemedView style={styles.card}>
      <ThemedView>
        <ThemedView style={styles.code}>
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            Course code:
          </ThemedText>
          <ThemedText type="default" style={styles.subCode}>
            {props.code}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.title}>
          <ThemedText style={{ fontSize: 15, fontWeight: 500 }}>
            Course title:
          </ThemedText>
          <ThemedText type="default" style={styles.subTitle}>
            {props.title}
          </ThemedText>
        </ThemedView>
        {props.checkbox && (
          <ThemedView style={styles.checkbox}>
            <CheckBox value={isChecked} onValueChange={setIsChecked} />
          </ThemedView>
        )}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    position: "relative",
    width: "95%",
    height: 95,
    backgroundColor: Colors.colorWhite,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorSecondary,
    paddingLeft: 5,
  },
  title: {
    position: "absolute",
    color: Colors.colorDark,
    left: 1,
    width: "100%",
    padding: 5,
  },
  code: {
    position: "absolute",
    color: Colors.colorDark,
    left: 1,
    top: 25,
    width: "100%",
    padding: 5,
    marginTop: 5,
  },
  subCode: {
    position: "absolute",
    right: 1,
    top: 8,
  },
  subTitle: {
    position: "absolute",
    right: 50,
    top: 8,
  },
  checkbox: {
    position: "absolute",
    right: 50,
    top: 60,
  },
});

export default CardCourses;
