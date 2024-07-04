import React from "react";
import { ThemedView } from "./ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "./ThemedText";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

type ActionLinkProps = {
  text: string;
  icon?: "lock-closed" | "help-circle-sharp" | "log-out-sharp";
  onPress?: string;
};
const ActionLink: React.FC<ActionLinkProps> = (props) => {
  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.container}
        onPress={() => router.push(`${props.onPress}`)}
      >
        <ThemedView>
          <Ionicons
            style={styles.icon}
            name={props.icon}
            size={20}
            color={Colors.colorDark}
          />
          <ThemedText type="default" style={styles.text}>
            {props.text}
          </ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    left: 50,
    top: -7,
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: -7,
  },
  container: {
    alignContent: "center",
    backgroundColor: Colors.colorWhite,
    marginTop: 2,
    position: "relative",
    width: "100%",
    height: 40,

    paddingVertical: 15,
    textAlign: "center",
  },
});

export default ActionLink;
