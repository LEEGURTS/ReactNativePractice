import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, Pressable, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../../screens/RootStack';
import {MainTabParamList} from '../../screens/MainTab';

function FloatingWriteButton(): JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & MainTabParamList>
    >();
  const onPress = () => {
    navigation.navigate('Write');
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: '#e0e0e0'}}
        onPress={onPress}>
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,

    shadowColor: '4d4d4d',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,

    overflow: Platform.select({android: 'hidden'}),
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#ffffff',
  },
});

export default FloatingWriteButton;
