import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import BackNavigation from "@/components/BackNavigation";
import Header from "@/components/Header";
import Dropdown from "@/components/Atoms/Form/Dropdown";
import { courses, demoPersons } from "@/constants/demoData";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import Calendar from "@/components/Atoms/TimeStamp/Calendar";
import Time from "@/components/Atoms/TimeStamp/Time";
import CardGeneral from "@/components/Atoms/Card/CardGeneral";
import DownloadFile from "@/components/DownloadFile";
import { ScrollView } from "react-native-gesture-handler";

const ViewAttendance = () => {
  const [seletCourses, setseletCourses] = useState("");
  const [startTime, setstartTime] = useState<Date>(new Date());
  const [endTime, setendTime] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<Date>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };
  const handlePeriodSelect = (date: Date) => {
    setSelectedPeriod(date);
    console.log("Selected date:", date);
  };

  const handleStartTime = (time: Date) => {
    setstartTime(time);
  };
  const handleEndTime = (time: Date) => {
    setendTime(time);
  };
  return (
    <ScrollView style={{ position: "relative" }}>
      <BackNavigation onPress="./HomeStudent" />
      <Header title="View Attendance" notification={true} />
      <ThemedView style={styles.title}>
        <ThemedText type="subtitle" style={{ color: Colors.colorPrimary }}>
          Filters
        </ThemedText>
        <ThemedView style={styles.date}>
          <ThemedView style={styles.setDate}>
            <Calendar
              onDateSelect={handleDateSelect}
              initialDate={selectedDate}
            />
          </ThemedView>
          <ThemedView style={styles.setDate}>
            <Calendar
              onDateSelect={handlePeriodSelect}
              initialDate={selectedPeriod}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.courses}>
        <Dropdown
          label="Courses"
          options={courses}
          value={seletCourses}
          onValueChange={setseletCourses}
        />
      </ThemedView>
      {/* <DownloadFile filename="Attendance" url="src\constants\code.docx" /> */}
      <ThemedView style={styles.cards}>
        {demoPersons.map((props) => (
          // <RenderIcons key={icon.href} {...icon} />
          <CardGeneral
            title={"Mobile app"}
            content={"total of presence"}
            letter="M"
            nberPresence="10/20"
          />
        ))}
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: -100,
    marginTop: 30,
    zIndex: 1,
  },
  setDate: {
    width: "100%",
    zIndex: 1,
  },
  date: {
    flex: 1,
    flexDirection: "column",
    zIndex: 1,
    justifyContent: "space-between",
  },
  courses: {
    position: "relative",
    marginLeft: "60%",
  },
  cards: {},
});

export default ViewAttendance;
