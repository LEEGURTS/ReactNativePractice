import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../screens/RootStack';
import {MainTabParamList} from '../../screens/MainTab';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface WriteHeaderProps {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
}

function WriteHeader({
  onSave,
  onAskRemove,
  isEditing,
}: WriteHeaderProps): JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & MainTabParamList>
    >();
  return (
    <View style={styles.block}>
      <View style={styles.block}>
        <Pressable
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
          android_ripple={{color: '#ededed'}}>
          <Icon name="arrow-back" size={24} color="#424242" />
        </Pressable>
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <View style={[styles.iconButtonWrapper, styles.marginRight]}>
            <Pressable
              style={styles.iconButton}
              onPress={onAskRemove}
              android_ripple={{color: '#ededed'}}>
              <Icon name="delete-forever" size={24} color="#ef5350" />
            </Pressable>
          </View>
        )}
        <View style={styles.iconButtonWrapper}>
          <Pressable
            style={styles.iconButton}
            android_ripple={{color: '#ededed'}}
            onPress={onSave}>
            <Icon name="check" size={24} color="#009688" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});
export default WriteHeader;
