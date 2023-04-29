import React, {useContext, useState} from 'react';
import CalendarView from '../components/Calendar/CalendarView';
import LogContext from '../contexts/LogContext';
import {format} from 'date-fns';
import FeedList from '../components/Feeds/FeedList';

function CalendarScreen(): JSX.Element {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = logs.reduce((acc, cur) => {
    const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
    (acc as any)[formattedDate] = {marked: true};
    return acc;
  }, {});

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
