import { Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { Link, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";
import { useForm, Controller, FieldValues } from "react-hook-form";

const LoginInstructor = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    alert("submitted");
    router.push("./HomeInstructor");
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
          name="ID"
          render={({ field: { onChange, value } }) => (
            <Input
              label="ID:"
              placeholder="enter your ID"
              value={value}
              onChangeText={(val) => onChange(val)}
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
        <Link href={"/"} style={styles.pwd}>
          <ThemedText type="link">Forgot Password?</ThemedText>
        </Link>
        <ThemedView style={styles.button}>
          <ThemedText type="default" style={{ textAlign: "center" }}>
            Don't have an account?
            <ThemedText type="link">
              <Link href={"./CreateInstructor"}> Sign Up</Link>
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
    color: Colors.colorPrimary,
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
    marginTop: "20%",
  },
});

export default LoginInstructor;
