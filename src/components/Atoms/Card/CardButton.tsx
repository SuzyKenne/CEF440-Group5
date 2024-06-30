import React from "react";
import { StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { CardProps } from "@/types/Card.type";
const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <ThemedView style={styles.card}>
      <Image
        source={require("../../../../assets/images/folder.svg")}
        style={styles.image}
        // resizeMode="contain"
      />
      <ThemedText style={styles.title}>{title}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    // position: "absolute",
    // left: "25%",
    marginTop: 16,
    width: 150,
    paddingHorizontal: 1,
    paddingVertical: 13,
    borderRadius: 15,
    backgroundColor: Colors.colorWhite,
    textAlign: "center",
  },
  title: {
    color: Colors.colorDark,
    fontSize: 17,
    justifyContent: "center",
    width: "85%",
    textAlign: "center",
  },
  image: {
    // justifyContent: "center",
    width: "30%",
  },
});

export default Card;
