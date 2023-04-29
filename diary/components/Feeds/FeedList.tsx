import React from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import FeedListItem from './FeedListItem';

interface FeedListProps {
  logs: {
    id: string;
    title: string;
    body: string;
    date: string;
  }[];
  onScrolledToBottom?: (isBottom: boolean) => void;
  ListHeaderComponent?: JSX.Element;
}

function FeedList({
  logs,
  onScrolledToBottom = () => {},
  ListHeaderComponent = <></>,
}: FeedListProps): JSX.Element {
  const separator = () => <View style={styles.separator} />;
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;

    const distanceToBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceToBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={separator}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
