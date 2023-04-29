import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Pressable, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from '../../screens/RootStack';
import {MainTabParamList} from '../../screens/MainTab';
import {Animated} from 'react-native';

interface FloatingWriteButtonProps {
  hidden: boolean;
}

function FloatingWriteButton({hidden}: FloatingWriteButtonProps): JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & MainTabParamList>
    >();

  const onPress = () => {
    navigation.navigate('Write');
  };

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [animation, hidden]);
  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 88],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
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
    </Animated.View>
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
