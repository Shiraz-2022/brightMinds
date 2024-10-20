import React, { useState } from "react";
import { Calendar, CalendarTheme } from "react-native-calendars";
import { StyleSheet } from "react-native";

export default function Calender() {
  const [selected, setSelected] = useState<string | null>(null);

  const theme: CalendarTheme = {
    backgroundColor: "#FEE9D4",
    calendarBackground: "#FEE9D4",
    textSectionTitleColor: "#693C27",
    selectedDayBackgroundColor: "#693C27",
    selectedDayTextColor: "#FEE9D4",
    todayTextColor: "#693C27",
    dayTextColor: "#693C27",
    textDisabledColor: "grey",
    arrowColor: "#693C27",
    monthTextColor: "#693C27",
    indicatorColor: "#693C27",
    textDayFontFamily: "System",
    textMonthFontFamily: "System",
    textDayHeaderFontFamily: "System",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  const getMarkedDates = () => {
    if (selected) {
      return {
        [selected]: {
          selected: true,
          selectedColor: "#693C27",
          selectedTextColor: "#FEE9D4",
        },
      };
    }
    return {};
  };

  return (
    <Calendar
      onDayPress={(day) =>
        setSelected(day.dateString === selected ? null : day.dateString)
      }
      markedDates={getMarkedDates()}
      style={styles.calendar}
      theme={theme}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "#FEE9D4",
  },
});
