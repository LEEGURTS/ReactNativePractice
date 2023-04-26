import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator<DrawNavigatorStackParamList>();

type HomeProps = DrawerScreenProps<DrawNavigatorStackParamList, 'Home'>;
type SettingProps = DrawerScreenProps<DrawNavigatorStackParamList, 'Setting'>;

function Home({navigation}: HomeProps): JSX.Element {
  return (
    <View>
      <Text>Home</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({navigation}: SettingProps): JSX.Element {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function drawerContent({navigation}: DrawerContentComponentProps) {
  return (
    <SafeAreaView>
      <Text>A Custom Drawer</Text>
      <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
    </SafeAreaView>
  );
}

function DrawNavigator(): JSX.Element {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior="history"
      drawerContent={drawerContent}
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: '설정',
        }}
      />
    </Drawer.Navigator>
  );
}

type DrawNavigatorStackParamList = {
  Home: undefined;
  Setting: undefined;
};

export default DrawNavigator;
