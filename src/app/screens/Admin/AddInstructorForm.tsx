import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";

const AddInstructorForm= ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedView style={styles.titleContainer}>
        <Input label ="Name:" onChangeText={()=>{}} placeholder="enter your name"/>
        <Input label ="ID:" onChangeText={()=>{}} placeholder="enter your ID"/>
        <Input label ="Faculty:" onChangeText={()=>{}} placeholder="enter your faculty"/>
      </ThemedView>
      <CustomButton title="add instructor" onPress={() => router.push("../screens/AddInstructorForm.tsx")} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     flexDirection: "column",
     margin: 15,
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
  subtitle: {
     fontSize: 20,
     marginTop: 20,
     color: Colors.colorDark,
  },
});

export default AddInstructorForm;
