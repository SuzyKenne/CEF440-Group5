import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { TimeProps } from "@/types/Calendar.type";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const Time: FC<TimeProps> = ({ onTimeSelect, initialTime = new Date() }) => {
  const [selectedTime, setSelectedTime] = useState<Date>(initialTime);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleTimePress = (time: moment.Moment) => {
    setSelectedTime(time.toDate());
    onTimeSelect(time.toDate());
    setIsVisible(false);
  };

  const handleTimeIconPress = () => {
    setIsVisible(!isVisible);
  };

  const renderTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = moment().hour(hour).minute(minute).format("hh:mm A");
        const timeDate = moment().hour(hour).minute(minute).toDate();
        times.push(
          <TouchableOpacity
            key={timeString}
            onPress={() => handleTimePress(moment(timeDate))}
            style={[
              styles.timeOption,
              selectedTime.getHours() === hour &&
              selectedTime.getMinutes() === minute
                ? styles.selectedTimeOption
                : null,
            ]}
          >
            <ThemedText style={styles.timeText}>{timeString}</ThemedText>
          </TouchableOpacity>
        );
      }
    }
    return times;
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={handleTimeIconPress}>
        <ThemedText style={styles.timeText}>
          {moment(selectedTime).format("hh:mm A")}
        </ThemedText>
        <Feather
          style={{ position: "absolute" }}
          name="clock"
          size={24}
          color="#666"
        />
      </TouchableOpacity>
      {isVisible && (
        <ThemedView style={styles.timeContainer}>
          <ThemedView style={styles.timeOptionsContainer}>
            {renderTimeOptions()}
          </ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: -2,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "100%",
    position: "relative",
  },
  timeText: {
    fontSize: 16,
    color: "#333",
    width: "150%",
    textAlign: "center",
    paddingLeft: 10,
  },
  timeContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    maxHeight: 300,
    overflow: "scroll",
  },
  timeOptionsContainer: {
    padding: 16,
  },
  timeOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedTimeOption: {
    backgroundColor: "#f0f0f0",
  },
});

export default Time;
