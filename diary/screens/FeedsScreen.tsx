import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import FloatingWriteButton from '../components/Feeds/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/Feeds/FeedList';

function FeedsScreen(): JSX.Element {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom: boolean) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  LogItem: {
    height: 28,
    padding: 6,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default FeedsScreen;
