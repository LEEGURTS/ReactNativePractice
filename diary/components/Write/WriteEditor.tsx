import React, {useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface WriteEditorProps {
  title: string;
  body: string;
  onChangeTitle: (title: string) => void;
  onChangeBody: (body: string) => void;
}

function WriteEditor({
  title,
  body,
  onChangeBody,
  onChangeTitle,
}: WriteEditorProps): JSX.Element {
  const bodyRef = useRef<TextInput | null>(null);
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요."
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        onSubmitEditing={() => bodyRef.current?.focus()}
        value={title}
      />
      <TextInput
        placeholder="오늘을 기록하세요."
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    fontSize: 18,
    paddingVertical: 0,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});
export default WriteEditor;
