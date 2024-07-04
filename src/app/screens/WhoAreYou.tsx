import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";

const WhoAreYou = ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../assets/images/whoareyou.svg")}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
      <ThemedView style={styles.elements}>
        <ThemedText type="subtitle" style={styles.sub}>
          Tell us who you are
        </ThemedText>
        <CustomButton
          title="Instructor"
          onPress={() => router.push("./Instructor/LoginInstructor")}
        />
        <CustomButton
          title="Student"
          onPress={() => router.push("./Student/LoginStudent")}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  elements: {
    position: "relative",
    marginTop: 100,
    width: "90%",
    alignItems: "center",
  },
  sub: {
    position: "absolute",
    top: -30,
    left: 35,
  },
});

export default WhoAreYou;
