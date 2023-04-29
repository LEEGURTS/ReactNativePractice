import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

interface CalendarViewProps {
  markedDates: {
    [date: string]: {
      selected: boolean;
      marked: boolean;
      selectedColor: string;
    };
  };
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

function CalendarView({
  markedDates,
  selectedDate,
  onSelectDate,
}: CalendarViewProps): JSX.Element {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
