import { Image, StyleSheet, Platform } from "react-native";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
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
        onPress={() => {
          alert("I am the first button - enabled");
        }}
        title="Button1"
        style={styles.customButton}
        textStyle={styles.customButtonText}
        disabled={false}
        activeOpacity={0.8}
        loading={false}
      />
      <CustomButton
        onPress={() => {
          alert("I am the Second button - disabled");
        }}
        title="Button2"
        style={styles.customButton}
        textStyle={styles.customButtonText}
        disabled={true}
        activeOpacity={0.8}
        loading={false}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      {/* </ParallaxScrollView> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
    width: "40%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#1c1c1c",
    borderRadius: 6,
  },
  customButtonText: {
    fontSize: 20,
  },
});
