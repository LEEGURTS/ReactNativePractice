import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {SafeAreaView} from 'react-native-safe-area-context';

type HeaderlessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Headerless'
>;

function HeaderlessScreen({navigation}: HeaderlessScreenProps): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>헤더리스</Text>
        <Button onPress={() => navigation.pop()} title="뒤로 가기" />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
