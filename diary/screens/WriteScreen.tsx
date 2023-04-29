import React, {useState, useContext} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/Write/WriteHeader';
import WriteEditor from '../components/Write/WriteEditor';
import LogContext from '../contexts/LogContext';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStack';
import {MainTabParamList} from './MainTab';

type WriteScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Write'
>;

function WriteScreen({route}: WriteScreenNavigationProp): JSX.Element {
  const log = route.params;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const {onCreate, onModify, onRemove} = useContext(LogContext);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & MainTabParamList>
    >();
  const onSave = () => {
    if (log) {
      onModify({id: log.id!, date: log.date, title, body});
    } else {
      onCreate({title, body, date: new Date().toISOString()});
    }

    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          style: 'destructive',
          onPress: () => {
            onRemove(log?.id!);
            navigation.pop();
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
