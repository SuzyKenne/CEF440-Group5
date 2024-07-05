import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import BackNavigation from "@/components/BackNavigation";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import CardCourses from "@/components/Atoms/Card/CardCourses";
import Dropdown from "@/components/Atoms/Form/Dropdown";
import { department, faculty, level } from "@/constants/demoData";

const CoursesRegistration = () => {
  const [selectFaculty, setselectFaculty] = useState("");
  const [selectDepartment, setselectDepartment] = useState("");
  const [selectLevel, setselectLevel] = useState("");

  return (
    <ThemedView>
      <BackNavigation onPress="./HomeInstructor" />
      <Header title="Courses" notification={true} />
      <ThemedText type="subtitle" style={styles.headers}>
        Filters
      </ThemedText>
      <ThemedView style={styles.filter}>
        <ThemedView style={{ maxWidth: "100%", width: "45%" }}>
          <Dropdown
            label="Faculty"
            options={faculty}
            value={selectFaculty}
            onValueChange={setselectFaculty}
            style={{ marginHorizontal: 16 }}
          />
        </ThemedView>
        <ThemedView style={{ maxWidth: "100%", width: "45%" }}>
          <Dropdown
            label="Select department"
            options={department}
            value={selectDepartment}
            onValueChange={setselectDepartment}
            style={{ marginHorizontal: 16 }}
          />
        </ThemedView>
        <ThemedView style={{ maxWidth: "100%", width: "45%" }}>
          <Dropdown
            label="Select level"
            options={level}
            value={selectLevel}
            onValueChange={setselectLevel}
            style={{ marginHorizontal: 16 }}
          />
        </ThemedView>
      </ThemedView>
      <ThemedText type="subtitle" style={styles.header}>
        Select your courses
      </ThemedText>
      <ThemedView>
        <CardCourses
          title="CEF 482"
          code="XML and Documentation"
          checkbox={true}
        />
        <CardCourses
          title="CEF XXX"
          code="XML and Documentation"
          checkbox={true}
        />
        <CardCourses
          title="CEF XXX"
          code="XML and Documentation"
          checkbox={true}
        />
        <CardCourses
          title="CEF XXX"
          code="XML and Documentation"
          checkbox={true}
        />
      </ThemedView>
      <ThemedView style={styles.btn}>
        <CustomButton
          title={"Save"}
          onPress={() => router.push("./CoursesRegistration")}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 8,
    color: Colors.colorSecondary,
    marginBottom: 10,
  },
  headers: {
    marginTop: -30,
    marginLeft: 8,
    color: Colors.colorSecondary,
  },
  btn: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  filter: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});

export default CoursesRegistration;
