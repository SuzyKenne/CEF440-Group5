import { Image, StyleSheet, Platform, Text } from "react-native";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/Atoms/Form/Input";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import Welcome from "../screens/Welcome";
import Card from "@/components/Atoms/Card/CardButton";

export default function HomeScreen() {
  const router = useRouter();
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("../../../assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    <ThemedView>
      <CustomButton
        onPress={() => router.push("../screens/Welcome")}
        title="Welcome page"
        style={styles.customButton}
        textStyle={styles.customButtonText}
        disabled={false}
        activeOpacity={0.8}
        loading={false}
      />
      <CustomButton
        onPress={() => {
          console.log("clicked disabled button");
        }}
        title="Button2"
        style={styles.customButton}
        textStyle={styles.customButtonText}
        disabled={true}
        activeOpacity={0.8}
        loading={false}
      />
      <Input
        label="Name"
        onChangeText={() => console.log("name input")}
        placeholder="Enter your name"
      />
      <Input
        iconName="eye"
        size={25}
        label="Password"
        onChangeText={() => console.log("passworf input field")}
        placeholder="Enter your Password"
        secureTextEntry={true}
      />
      <ThemedView style={styles.container}>
        <Card title="Create a session" />
        <Card title="View Attemdance" />
      </ThemedView>
      {/* </ParallaxScrollView> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    // gap: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  customButton: {
    // width: "40%",
    alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "#1c1c1c",
    // borderRadius: 6,
  },
  customButtonText: {
    // fontSize: 20,
  },
});
