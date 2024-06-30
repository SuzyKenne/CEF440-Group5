import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from '@/components/Atoms/Form/Input'

const LoginInstructor= ({}) => {
    const router = useRouter();
    return (
      <ThemedView style={styles.container}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
          <ThemedText type="title" style={styles.title}>
            Login
          </ThemedText>
            <Input label ="ID:" onChangeText={()=>{}} placeholder="enter your ID"/>
            <Input label ="Password:" onChangeText={()=>{}} placeholder="enter your Password"/>
            <ThemedText type="title" style={styles.paragraph}>
                Forgort Password?
            </ThemedText>
        <ThemedText>
            <ThemedText style={styles.button}>
                <CustomButton title="Login" onPress={() => router.push("../screens/loginInstructor.tsx")} />
            </ThemedText>
        </ThemedText>
      </ThemedView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      margin: 1,
      backgroundColor: "none",
    //   gap: 50,
    },
    logo: {
      width: "30%",
      height: "30%",
      alignSelf: "center",
    },
    title: {
      margin: 15,    
      fontSize: 70,
      fontWeight: "bold",
      color: Colors.colorPrimary,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
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
    alignSelf: "flex-end"
  },
  });
  
  export default LoginInstructor;
  