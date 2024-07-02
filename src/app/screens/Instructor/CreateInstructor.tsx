import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Input from "@/components/Atoms/Form/Input";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";


const CreateInstructor = () => {
    const router = useRouter();
  
    const {
      control,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({ mode: "onSubmit" });
  
    const onSubmit = (data: FieldValues) => {
      console.log(data);
      alert("submitted");
      router.push("./");
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
              name="ID"
              render={({ field: { onChange, value } }) => (
                  <Input label="ID:" onChangeText={(val) => {onChange(val)}} placeholder="enter your ID" value={value}/>
                )}
              />
              <Controller
              control={control}
              name="Email"
              render={({ field: { onChange, value } }) => (
                  <Input
                    label="Email:"
                    onChangeText={(val) => {onChange(val)}}
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
                  onChangeText={(val) =>  onChange(val)}
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
                  label=" confirm Password:"
                  onChangeText={(val) =>  onChange(val)}
                  value={value}
                  placeholder="Confirm your Password"
                  secureTextEntry={true}
                  iconName="eye"
                  size={25}
                />
              )}
             />
            <ThemedText style={styles.button}>
            <ThemedText>
              <CustomButton
                title="create account"
                onPress={handleSubmit(onSubmit)}
              />
            </ThemedText>
          </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:15,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"

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
    marginLeft: 40,
  },
  form: {
    width: "100%",
  },
  

  paragraph: {
    fontSize: 15,
    color: Colors.colorPrimary,
   alignSelf: "flex-end",
  },
 
});

export default CreateInstructor;
