import React, {useState, useContext} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/Write/WriteHeader';
import WriteEditor from '../components/Write/WriteEditor';
import LogContext from '../contexts/LogContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStack';
import {MainTabParamList} from './MainTab';

function WriteScreen(): JSX.Element {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {onCreate} = useContext(LogContext);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & MainTabParamList>
    >();
  const onSave = () => {
    onCreate({title, body, date: new Date().toISOString()});
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
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
