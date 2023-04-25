import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

function DateHead(): JSX.Element {
  const date = new Date();
  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={(styles.statusBarPlaceholder, {height: top})} />
      <StatusBar backgroundColor="#26a69a" barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일`}</Text>
      </View>
    </>
  );
}

export default DateHead;
