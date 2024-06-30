import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";

const WhoAreYou = ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
        
      <Image
        source={require("../../../assets/images/Fingerprint-pana 1.svg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Who are you?
        </ThemedText>
      </ThemedView>
      <CustomButton title="Instructor" onPress={() => router.push("../")} />
      <CustomButton title="Student" onPress={() => router.push("../")} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
    backgroundColor: "none",
  },
  logo: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
  },
  titleContainer: {
    backgroundColor: "none",
  },
  title: {
    margin: 15,
    fontSize: 50,
    fontWeight: "bold",
    color: Colors.colorPrimary,
  },
  paragraph: {
    fontSize: 15,
    color: Colors.colorPrimary,
    marginTop: 10,
    alignSelf: "flex-end"
  }
});

export default WhoAreYou;
