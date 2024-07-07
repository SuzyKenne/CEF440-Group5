import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import BackNavigation from "@/components/BackNavigation";
import Header from "@/components/Header";
import Dropdown from "@/components/Atoms/Form/Dropdown";
import { courses } from "@/constants/demoData";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import Calendar from "@/components/Atoms/TimeStamp/Calendar";
import Time from "@/components/Atoms/TimeStamp/Time";

const CreateSession = () => {
  const [seletCourses, setseletCourses] = useState("");
  const [startTime, setstartTime] = useState<Date>(new Date());
  const [endTime, setendTime] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  const handleStartTime = (time: Date) => {
    setstartTime(time);
  };
  const handleEndTime = (time: Date) => {
    setendTime(time);
  };
  return (
    <ThemedView style={{ position: "relative" }}>
      <BackNavigation onPress="./HomeInstructor" />
      <Header title="Create a session" notification={true} />
      <ThemedText type="subtitle" style={{ color: Colors.colorPrimary }}>
        Courses
      </ThemedText>
      <Dropdown
        label="Courses"
        options={courses}
        value={seletCourses}
        onValueChange={setseletCourses}
      />
      <ThemedView style={styles.title}>
        <ThemedText type="subtitle" style={{ color: Colors.colorPrimary }}>
          Date
        </ThemedText>
        <Calendar onDateSelect={handleDateSelect} initialDate={selectedDate} />
      </ThemedView>
      <ThemedView style={styles.timeManage}>
        <ThemedView style={styles.setTime}>
          <ThemedText type="subtitle" style={{ color: Colors.colorPrimary }}>
            Start time
          </ThemedText>
          <Time onTimeSelect={handleStartTime} initialTime={startTime} />
        </ThemedView>
        <ThemedView style={styles.setTime}>
          <ThemedText type="subtitle" style={{ color: Colors.colorPrimary }}>
            End time
          </ThemedText>
          <Time onTimeSelect={handleEndTime} initialTime={endTime} />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.btn}>
        <CustomButton
          title={"Create the session"}
          onPress={() => router.push("./CoursesRegistration")}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  timeManage: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "blue",
    paddingTop: -100,
    marginTop: 30,
    zIndex: 1,
  },
  title: {
    marginTop: 30,
    zIndex: 1,
  },
  setTime: {
    width: "50%",
  },
  btn: {
    marginTop: 80,
    width: "100%",
    alignItems: "center",
  },
});

export default CreateSession;
