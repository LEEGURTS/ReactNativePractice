import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export type RootStackParamList = {
  MainTab: undefined;
  Write?: {
    id?: string;
    title: string;
    body: string;
    date: string;
  };
};

export default RootStack;
