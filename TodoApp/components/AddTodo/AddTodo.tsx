import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface AddTodoProps {
  onInsert: (text: string) => void;
}

function AddTodo({onInsert}: AddTodoProps): JSX.Element {
  const [text, setText] = useState<string>('');

  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력해주세요."
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.button}>
          <Image
            source={require('../../assets/icons/add_white/add_white.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
});

export default AddTodo;
