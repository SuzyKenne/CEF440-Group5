import React, { FC, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { CalendarProps } from "@/types/Calendar.type";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const Calendar: FC<CalendarProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<moment.Moment>(moment());
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    onDateSelect(selectedDate);
  }, [selectedDate, onDateSelect]);

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  const handleDatePress = (date: moment.Moment) => {
    setSelectedDate(date.toDate());
    setIsVisible(false);
  };

  const handleCalendarIconPress = () => {
    setIsVisible(!isVisible);
  };

  const renderDays = () => {
    const days = [];
    const startDay = currentMonth.clone().startOf("month").startOf("week");
    const endDay = currentMonth.clone().endOf("month").endOf("week");

    let day = startDay;
    while (day.isBefore(endDay, "day")) {
      days.push(
        <TouchableOpacity
          key={day.format("YYYY-MM-DD")}
          style={[
            styles.dayContainer,
            day.isSame(selectedDate, "day") && styles.selectedDayContainer,
          ]}
          onPress={() => handleDatePress(day)}
        >
          <ThemedText
            style={[
              styles.dayText,
              day.isSame(selectedDate, "day") && styles.selectedDayText,
            ]}
          >
            {day.format("D")}
          </ThemedText>
        </TouchableOpacity>
      );
      day = day.clone().add(1, "day");
    }

    return days;
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={handleCalendarIconPress}>
        <Feather name="calendar" size={24} color="#666" />
        <ThemedText style={styles.dateText}>
          {moment(selectedDate).format("MMM DD YYYY")}
        </ThemedText>
      </TouchableOpacity>
      {isVisible && (
        <ThemedView style={styles.calendarContainer}>
          <ThemedView style={styles.header}>
            <TouchableOpacity onPress={handlePrevMonth}>
              <Feather name="chevron-left" size={24} color="#666" />
            </TouchableOpacity>
            <ThemedText style={styles.monthText}>
              {currentMonth.format("MMMM YYYY")}
            </ThemedText>
            <TouchableOpacity onPress={handleNextMonth}>
              <Feather name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          </ThemedView>
          <ThemedView style={styles.daysContainer}>{renderDays()}</ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 8,
    position: "absolute",
  },
  container: {
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    height: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayContainer: {
    width: "14.28%",
    alignItems: "center",
    paddingVertical: 8,
  },
  dayText: {
    fontSize: 16,
    color: "#666",
  },
  selectedDayContainer: {
    backgroundColor: "#007AFF",
    borderRadius: 50,
  },
  selectedDayText: {
    color: "#fff",
  },
  dateText: {
    position: "relative",
    left: 100,
    fontSize: 16,
    color: "#666",
    top: -25,
    marginLeft: 8,
  },
});

export default Calendar;
