import React, {createContext, useEffect, useRef} from 'react';
import {v4 as uuidV4} from 'uuid';
import logsStorage from '../components/LogStorage/LogsStorage';

const LogContext = createContext<LogState>({
  logs: [],
  onCreate: () => {},
  onModify: () => {},
  onRemove: () => {},
});

interface LogState {
  logs: {id: string; title: string; body: string; date: string}[];
  onCreate: ({
    title,
    body,
    date,
  }: {
    title: string;
    body: string;
    date: string;
  }) => void;
  onModify: (modified: {
    id: string;
    title: string;
    body: string;
    date: string;
  }) => void;
  onRemove: (id: string) => void;
}

export const LogContextProvier = ({children}: {children: React.ReactNode}) => {
  const [logs, setLogs] = React.useState<
    {title: string; body: string; id: string; date: string}[]
  >(
    Array(10)
      .fill(0)
      .map((_, idx) => ({
        id: uuidV4(),
        title: `Log ${idx}`,
        body: `Log ${idx} body`,
        date: new Date().toISOString(),
      })),
  );
  const initialLogsRef = useRef();
  const onCreate = ({
    title,
    body,
    date,
  }: {
    title: string;
    body: string;
    date: string;
  }) => {
    const log = {
      id: uuidV4(),
      title,
      body,
      date,
    };

    setLogs([...logs, log]);
  };
  const onModify = (modifed: {
    id: string;
    title: string;
    body: string;
    date: string;
  }) => {
    const nextLogs = logs.map(log => (log.id === modifed.id ? modifed : log));
    setLogs(nextLogs);
  };

  const onRemove = (id: string) => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
