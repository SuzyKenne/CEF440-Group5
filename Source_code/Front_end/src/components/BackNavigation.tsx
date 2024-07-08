import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type BackProps = {
  onPress?: string;
};

const BackNavigation: React.FC<BackProps> = (props) => {
  return (
    <ThemedView style={styles.contain}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => router.push(`${props.onPress}`)}
      >
        <ThemedView>
          <Ionicons
            style={styles.icon}
            name={"arrow-back"}
            size={30}
            color={Colors.colorDark}
          />
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  icon: {},
  container: {
    // flex: 1,
    // alignItems: "center",
    cursor: "pointer",
    // justifyContent: "center",
    // marginTop: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contain: {
    position: "absolute",
    left: 15,
    borderRadius: 10,
    alignContent: "center",
    textAlign: "center",
    backgroundColor: Colors.colorWhite,
    width: 40,
    height: 40,
    // flex: 1,
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default BackNavigation;
