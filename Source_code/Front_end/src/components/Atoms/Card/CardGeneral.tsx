import React from "react";
import { StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { CardGeneralProps } from "@/types/Card.type";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
const CardGeneral: React.FC<CardGeneralProps> = (props) => {
  return (
    <ThemedView style={styles.card}>
      <ThemedView style={styles.imageContainer}>
        <Image
          source={{ uri: props.image }}
          style={styles.img}
          resizeMode="contain"
        />
        <Ionicons
          style={styles.icon}
          name={props.icon}
          size={40}
          color={Colors.colorDanger}
        />
        <ThemedText style={styles.letter}>{props.letter}</ThemedText>
      </ThemedView>
      <ThemedText type="title" style={styles.title}>
        {props.title}
      </ThemedText>
      <ThemedText type="default" style={styles.time}>
        {props.time}
      </ThemedText>
      <ThemedText type="default" style={styles.subtitle}>
        {props.content}
        <ThemedText
          type="link"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: Colors.colorPrimary,
          }}
        >
          {" "}
          {props.status}
        </ThemedText>
        <ThemedText
          type="link"
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: Colors.colorPrimary,
          }}
        >
          {" "}
          {props.nberPresence}
        </ThemedText>
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    marginHorizontal: "auto",
    position: "relative",
    width: "95%",
    paddingHorizontal: 1,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: Colors.colorWhite,
  },
  imageContainer: {
    position: "relative",
    left: 10,
    width: 60,
    height: 60,
    backgroundColor: Colors.colorDisable,
    borderRadius: 30,
    paddingTop: 10,
  },
  title: {
    color: Colors.colorDark,
    fontSize: 20,
    position: "absolute",
    left: 90,
  },
  time: {
    position: "absolute",
    right: 10,
    top: 18,
  },
  subtitle: {
    position: "absolute",
    left: 90,
    top: 50,
  },
  img: {
    alignSelf: "center",
    width: 35,
    height: 35,
  },
  icon: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  letter: {
    color: Colors.colorWhite,
    fontSize: 40,
    fontWeight: 800,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
});

export default CardGeneral;
