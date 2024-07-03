import React from "react";
import { StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { CardProps } from "@/types/Card.type";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
// import {Img} from "../../../../assets/images/attendanceHistorique.png";
const Card: React.FC<CardProps> = ({ title, image, onPress }) => {
  return (
    <ThemedView style={styles.card}>
      <TouchableOpacity onPress={() => router.push(`${onPress}`)}>
        <Image
          source={{ uri: image }}
          style={styles.img}
          resizeMode="contain"
        />
        <ThemedText style={styles.title}>{title}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    width: "40%",
    maxWidth: "50%",
    paddingHorizontal: 1,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: Colors.colorWhite,
    textAlign: "center",
  },
  title: {
    color: Colors.colorDark,
    fontSize: 18,
    marginTop: 5,
    width: "95%",
    textAlign: "center",
    alignSelf: "center",
  },
  img: {
    alignSelf: "center",
    width: 70,
    height: 70,
  },
});

export default Card;
