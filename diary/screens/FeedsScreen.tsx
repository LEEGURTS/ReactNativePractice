import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FloatingWriteButton from '../components/Feeds/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

function FeedsScreen(): JSX.Element {
  const {logs} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <Text>{JSON.stringify(logs)}</Text>
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
