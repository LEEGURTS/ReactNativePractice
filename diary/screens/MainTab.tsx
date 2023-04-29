import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedsScreen from './FeedsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarScreen from './CalendarScreen';
import SeachScreen from './SearchScreen';
import SearchHeader from '../components/Search/SearchHeader';

const Tab = createBottomTabNavigator<MainTabParamList>();

const getIcon = (color: string, size: number, name: string) => {
  return <Icon name={name} color={color} size={size} />;
};

function MainTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#009688',
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          padding: 10,
        },
      }}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => getIcon(color, size, 'view-stream'),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => getIcon(color, size, 'event'),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SeachScreen}
        options={{
          tabBarIcon: ({color, size}) => getIcon(color, size, 'search'),
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export type MainTabParamList = {
  Feeds: undefined;
  Calender: undefined;
  Search: undefined;
};

export default MainTab;
