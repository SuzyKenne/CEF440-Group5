import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Buddy" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <button style={styles.button}>
            <ThemedText type="link">Go to home screen!</ThemedText>
          </button>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    cursor: "pointer",
    borderWidth: 0,
    backgroundColor: Colors.colorBg,
    borderRadius: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
