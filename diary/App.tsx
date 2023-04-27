import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';
import {LogContextProvier} from './contexts/LogContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LogContextProvier>
        <RootStack />
      </LogContextProvier>
    </NavigationContainer>
  );
}

export default App;
