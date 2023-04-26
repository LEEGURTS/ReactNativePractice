import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  return (
    <>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        style={styles.container}
        data={Array(3)
          .fill(0)
          .map((_, idx) => ({id: idx + 1}))}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Button
            title={`Detail ${item.id} 열기`}
            onPress={() => navigation.navigate('Detail', item)}
          />
        )}
      />
      <View>
        <Button
          title="Headerless 열기"
          onPress={() => navigation.navigate('Headerless')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
export default HomeScreen;
