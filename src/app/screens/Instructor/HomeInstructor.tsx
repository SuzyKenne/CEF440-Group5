import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import CardGeneral from "@/components/Atoms/Card/CardGeneral";
import Card from "@/components/Atoms/Card/CardButton";
import { ScrollView } from "react-native-gesture-handler";
import ActionLink from "@/components/ActionLink";
import BackNavigation from "@/components/BackNavigation";
import Header from "@/components/Header";

const HomeInstructor = ({}) => {
  const router = useRouter();
  return (
    <ScrollView>
      <Header title="Home" notification={true} />
      <ThemedView style={styles.contain}>
        <CardGeneral
          content="Welcome !"
          title="Hi Aubin SIAHA"
          icon="person-sharp"
        />
        <Card
          title="Courses"
          image={"../../../../assets/images/Book.png"}
          onPress="/screens/Welcome"
        />
        <Card
          title="Create a session"
          image={"../../../../assets/images/person.png"}
          onPress="/screens/Welcome"
        />
        <Card
          title="View attendance"
          image={"../../../../assets/images/attendanceHistorique.png"}
          onPress="/screens/Welcome"
        />
      </ThemedView>
      <ThemedView style={styles.footer}>
        <ActionLink
          text="Helps"
          onPress="/screens/Welcome"
          icon="help-circle-sharp"
        />
        <ActionLink
          text="Privacy"
          onPress="/screens/Welcome"
          icon="lock-closed"
        />
        <ActionLink
          text="Logout"
          onPress="/screens/Welcome"
          icon="log-out-sharp"
        />
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
  },
  title: {
    marginLeft: "40%",
    textAlign: "center",
    color: Colors.colorPrimary,
    fontSize: 26,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignContent: "center",
    textAlign: "center",
    backgroundColor: Colors.colorWhite,
    marginLeft: "25%",
    cursor: "pointer",
  },
  contain: {},
  footer: {
    marginBottom: 10,
    marginTop: 40,
  },
});

export default HomeInstructor;
