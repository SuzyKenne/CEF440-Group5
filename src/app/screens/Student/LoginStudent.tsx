import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { Link, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";import { useForm, Controller, FieldValues } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginStudent = ({}) => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    alert("submitted");
    router.push("../LoginStudent.tsx");
  };
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={{ width: 200, height: 90 }}
        resizeMode="contain"
      />
      <ThemedText type="title" style={styles.title}>
        Login
      </ThemedText>
      
        <SafeAreaView style={styles.form}>
        <Controller
          control={control}
          name="Matricule"
          render={({ field: { onChange, value } }) => (
            <Input
            value={value}
            onChangeText={(val) => onChange(val)}
                label="Matricule:"
                placeholder="Enter Matricule"
              />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
        <Controller
          control={control}
          name="Matricule"
          render={({ field: { onChange, value } }) => (
            <Input
            value={value}
            label="Password:"
            onChangeText={(val) => onChange(val)}
                placeholder="Enter Password"
                secureTextEntry= {true}
                iconName="eye"
                size={25}
              />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
      <Link href={"/"} style={styles.pwd}>
          <ThemedText type="link">Forgot Password?</ThemedText>
        </Link>
        <ThemedView style={styles.button}>
      <ThemedText type="default" style={styles.signup}>Don't have an acccount? 
        <ThemedText type="link">
          <Link href={"./CreateAccountStudent"}> Sign Up</Link>
        </ThemedText>
        </ThemedText>
          <ThemedView style={{ marginLeft: 40 }}>
            <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />
          </ThemedView>
        </ThemedView>
        </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    marginLeft: -200,
    marginTop: 100,
    color: Colors.colorPrimary, fontSize: 50,
  },
  form: {
    width: "100%",
  },
  pwd: {
    fontSize: 15,
    color: Colors.colorPrimary,
    marginTop: 10,
    marginRight: 30,
    alignSelf: "flex-end",
  },
  button: {
    marginTop: "50%",
  },
  signup: {
    textAlign:"center",
  }
});

export default LoginStudent;
