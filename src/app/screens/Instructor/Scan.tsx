import React, { Component } from "react";
import { StyleSheet, Alert, Platform } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

export default class App extends Component {
  state = {
    compatible: false,
    fingerprints: false,
    result: "",
  };

  componentDidMount() {
    this.checkDeviceForHardware();
    this.checkForFingerprints();
  }

  checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);
    this.setState({ compatible });
  };

  checkForFingerprints = async () => {
    let fingerprints = await LocalAuthentication.isEnrolledAsync();
    console.log(fingerprints);
    this.setState({ fingerprints });
  };

  scanFingerprint = async () => {
    let result = await LocalAuthentication.authenticateAsync();
    console.log("Scan Result:", result);
  };

  showAndroidAlert = () => {
    Alert.alert(
      "Fingerprint Scan",
      "Please, place your finger over the touch sensor and press scan.",
      [
        {
          text: "Scan",
          onPress: () => {
            this.scanFingerprint();
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
      ]
    );
  };

  render() {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.text}>
          Compatible Device?{" "}
          {this.state.compatible === true ? (
            <ThemedText style={styles.true}>True</ThemedText>
          ) : (
            "False"
          )}
        </ThemedText>
        {/* <ThemedText style={styles.true}>True</ThemedText> */}
        <ThemedText style={styles.text}>
          Fingerprings Saved?{" "}
          {this.state.fingerprints === true ? (
            <ThemedText style={styles.true}>True</ThemedText>
          ) : (
            "False"
          )}
        </ThemedText>
        <CustomButton
          onPress={
            Platform.OS === "android"
              ? this.showAndroidAlert
              : this.scanFingerprint
          }
          title={"SCAN"}
        />
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  true: {
    color: Colors.colorGreen,
    fontSize: 18,
  },
});
