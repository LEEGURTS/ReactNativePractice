import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';
import {LogContextProvier} from './contexts/LogContext';
import {SearchContextProvider} from './contexts/SearchContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvier>
          <RootStack />
        </LogContextProvier>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
