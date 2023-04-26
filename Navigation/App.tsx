import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import DetailScreen from './components/screens/DetailScreen';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderlessScreen from './components/screens/HeaderlessScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigationRef.navigate('Detail', {
                    id: navigationRef.getCurrentRoute()?.params.id - 1,
                  });
                }}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigationRef.navigate('Detail', {
                    id: navigationRef.getCurrentRoute()?.params.id + 1,
                  });
                }}>
                <Text>Right</Text>
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
  Home: undefined;
  Detail: {id: number};
  Headerless: undefined;
  DrawNavigator: undefined;
};

export default App;
