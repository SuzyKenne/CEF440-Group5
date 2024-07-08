import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import BackNavigation from "@/components/BackNavigation";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import CardCourses from "@/components/Atoms/Card/CardCourses";

const Courses = () => {
  return (
    <ThemedView>
      <BackNavigation onPress="./HomeInstructor" />
      <Header title="Courses" notification={true} />
      <ThemedText type="subtitle" style={styles.header}>
        Your courses
      </ThemedText>
      <ThemedView>
        <CardCourses title="CEF 482" code="XML and Documentation" />
        <CardCourses title="CEF XXX" code="XML and Documentation" />
        <CardCourses title="CEF XXX" code="XML and Documentation" />
        <CardCourses title="CEF XXX" code="XML and Documentation" />
        <CardCourses title="CEF XXX" code="XML and Documentation" />
      </ThemedView>
      <ThemedView style={styles.btn}>
        <CustomButton
          title={"Course Registration"}
          onPress={() => router.push("./CoursesRegistration")}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    marginLeft: 8,
    color: Colors.colorSecondary,
    marginBottom: 10,
  },
  btn: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
});

export default Courses;
