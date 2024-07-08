import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type HeaderProps = {
  title?: string;
  notification?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <ThemedView style={styles.header}>
      <ThemedText type="title" style={styles.title}>
        {props.title}
      </ThemedText>
      {props.notification && (
        <ThemedText style={styles.icon}>
          <Ionicons
            name={"notifications-sharp"}
            size={26}
            color={Colors.colorDark}
          />
        </ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 50,
    flex: 1,
    flexDirection: "row",
    position: "relative",
  },
  title: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    color: Colors.colorPrimary,
    fontSize: 26,
  },
  icon: {
    position: "absolute",
    right: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignContent: "center",
    textAlign: "center",
    backgroundColor: Colors.colorWhite,
    marginLeft: 0,
    cursor: "pointer",
  },
});

export default Header;
