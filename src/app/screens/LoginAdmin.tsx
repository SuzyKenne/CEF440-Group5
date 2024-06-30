import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";

const LoginAdmin = ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
        
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Login
        </ThemedText>
        <Input label="Name:" onChangeText={()=>{}} placeholder="Enter Name"/>
        <Input label="Password:" onChangeText={()=>{}} placeholder="Enter Password" />
        <ThemedText type="title" style={styles.paragraph}>
          Forgot Password?
        </ThemedText>
      </ThemedView>
      <CustomButton title="Login" onPress={() => router.push("../")} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
    backgroundColor: "none",
    gap: 50,
  },
  logo: {
    width: "30%",
    height: "30%",
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

export default LoginAdmin;
