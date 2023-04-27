import React, {createContext} from 'react';
import {v4 as uuidV4} from 'uuid';

const LogContext = createContext<LogState>({logs: [], onCreate: () => {}});

interface LogState {
  logs: {title: string; body: string}[];
  onCreate: ({
    title,
    body,
    date,
  }: {
    title: string;
    body: string;
    date: string;
  }) => void;
}

export const LogContextProvier = ({children}: {children: React.ReactNode}) => {
  const [logs, setLogs] = React.useState<{title: string; body: string}[]>([]);
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
  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
