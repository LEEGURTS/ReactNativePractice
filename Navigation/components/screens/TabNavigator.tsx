import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<TabStackParamList>();

function HomeScreen(): JSX.Element {
  return <Text>Home</Text>;
}

function SearchScreen(): JSX.Element {
  return <Text>Search</Text>;
}

function NotificationScreen(): JSX.Element {
  return <Text>Notification</Text>;
}

function MessageScreen(): JSX.Element {
  return <Text>Message</Text>;
}

const getTabBarIcon = (
  {color, size}: {color: string; size: number},
  name: string,
) => <Icon name={name} color={color} size={size} />;

function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          padding: 5,
        },
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => getTabBarIcon({color, size}, 'home'),
          tabBarBadge: undefined,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color, size}) => getTabBarIcon({color, size}, 'search'),
          tabBarActiveTintColor: 'red',
          tabBarBadge: 100,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) =>
            getTabBarIcon({color, size}, 'notifications'),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) =>
            getTabBarIcon({color, size}, 'message'),
        }}
      />
    </Tab.Navigator>
  );
}

type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

export default TabNavigator;
