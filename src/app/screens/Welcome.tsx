import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";

const Welcome = ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 300, height: 130 }}
        resizeMode="contain"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Welcome!
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Make easy, fast and accurate class attendance
        </ThemedText>
      </ThemedView>

      <CustomButton
        title="Get Started!"
        onPress={() => router.push("./WhoAreYou")}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 50,
  },
  titleContainer: {
    backgroundColor: "none",
  },
  title: {
    textAlign: "center",
    fontSize: 70,
  },
  subtitle: {
    textAlign: "center",
    marginTop: 25,
  },
});

export default Welcome;
