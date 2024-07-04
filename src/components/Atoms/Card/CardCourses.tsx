import React from "react";
import { StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { CardCoursesProps } from "@/types/Card.type";
import Ionicons from "@expo/vector-icons/Ionicons";
const CardCourses: React.FC<CardCoursesProps> = (props) => {
  return (
    <ThemedView style={styles.card}>
      <ThemedView>
        <ThemedView style={styles.code}>
          <ThemedText style={{ fontSize: 19, fontWeight: 500 }}>
            Course code:
          </ThemedText>
          <ThemedText type="default" style={styles.subCode}>
            {props.code}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.title}>
          <ThemedText style={{ fontSize: 19, fontWeight: 500 }}>
            Course title:
          </ThemedText>
          <ThemedText type="default" style={styles.subTitle}>
            {props.title}
          </ThemedText>
        </ThemedView>
        {props.checkbox && <ThemedView> code for checkbox here</ThemedView>}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    position: "relative",
    width: "95%",
    height: 80,
    backgroundColor: Colors.colorWhite,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorSecondary,
    paddingLeft: 5,
    paddingTop: 5,
  },
  title: {
    position: "absolute",
    color: Colors.colorDark,
    left: 1,
    width: "100%",
    padding: 5,
    fontSize: 16,
  },
  code: {
    position: "absolute",
    color: Colors.colorDark,
    left: 1,
    top: 25,
    width: "100%",
    padding: 5,
    marginTop: 5,
    fontSize: 16,
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
});

export default CardCourses;
