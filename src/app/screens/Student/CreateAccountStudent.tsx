import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";

const CreateAccountStudent = ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedText type="title" style={styles.title}>
        Create Account
      </ThemedText>
      <Input label="ID:" onChangeText={() => {}} placeholder="enter your ID" />
      <Input
        label="Email:"
        onChangeText={() => {}}
        placeholder="enter your Email"
      />
      <Input
        label="Password:"
        onChangeText={() => {}}
        placeholder="enter your Password"
      />
      <Input
        label="Confirm password:"
        onChangeText={() => {}}
        placeholder="confirm password"
      />

      <ThemedText>
        <ThemedText style={styles.button}>
          <CustomButton
            title="create account"
            onPress={() => router.push("../screens/CreateAccountStudent.tsx")}
          />
        </ThemedText>
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    flexDirection: "column",
    backgroundColor: "none",
  },
  logo: {
    width: "30%",
    height: "30%",
    alignSelf: "center",
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: Colors.colorPrimary,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    margin: 20,
  },
  // subtitle: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   marginTop: 15,
  //   color: Colors.colorDark,
  // },

  paragraph: {
    fontSize: 15,
    color: Colors.colorPrimary,
    // marginTop: 10,
    alignSelf: "flex-end",
  },
});

export default CreateAccountStudent;
