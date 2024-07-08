import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { Link, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateAccountStudent = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    alert("submitted");
    router.push("./HomeStudent");
  };
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={{ width: 200, height: 90 }}
        resizeMode="contain"
      />

      <ThemedText type="title" style={styles.title}>
        Create Account
      </ThemedText>

      <SafeAreaView style={styles.form}>
        <Controller
          control={control}
          name="Matricule"
          render={({ field: { onChange, value } }) => (
            <Input
              label="ID:"
              onChangeText={(val) => {
                onChange(val);
              }}
              placeholder="enter your Matricule"
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="Email"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Email:"
              onChangeText={(val) => {
                onChange(val);
              }}
              placeholder="enter your Email"
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="Password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password:"
              onChangeText={(val) => onChange(val)}
              value={value}
              placeholder="enter your Password"
              secureTextEntry={true}
              iconName="eye"
              size={25}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirm Password:"
              onChangeText={(val) => onChange(val)}
              value={value}
              placeholder="Confirm your Password"
              secureTextEntry={true}
              iconName="eye"
              size={25}
            />
          )}
        />
        <Link href={"/"} style={styles.pwd}>
          <ThemedText type="link">Forgot Password?</ThemedText>
        </Link>
        <ThemedView style={styles.button}>
          <ThemedText type="default" style={{ textAlign: "center" }}>
            Already have an account?
            <ThemedText type="link">
              <Link href={"./LoginStudent"}> Login</Link>
            </ThemedText>
          </ThemedText>
          <ThemedView style={{ marginLeft: 40 }}>
            <CustomButton
              title="Create account"
              onPress={handleSubmit(onSubmit)}
            />
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    marginLeft: -50,
    color: Colors.colorPrimary,
  },
  button: {
    marginTop: "10%",
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
});

export default CreateAccountStudent;
