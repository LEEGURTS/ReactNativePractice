/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import DateHead from './components/DateHead/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo/AddTodo';
import Empty from './components/Empty/Empty';
import TodoList from './components/TodoList/TodoList';
import AsyncStorage from '@react-native-community/async-storage';

function App(): JSX.Element {
  const [todos, setTodos] = React.useState<
    {id: number; text: string; done: boolean}[]
  >([]);

  const onInsert = (text: string) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {id: nextId, text, done: false};
    setTodos([...todos, todo]);
  };

  const onToggle = (id: number) => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const rawTodos = await AsyncStorage.getItem('todos');
        const savedTodos = JSON.parse(rawTodos || '[]');
        setTodos(savedTodos);
      } catch {
        console.log('Failed to load todos');
      }
    };
    load();
  }, []);

  useEffect(() => {
    const save = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch {
        console.log('Failed to save todos');
      }
    };
    save();
  }, [todos]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList onToggle={onToggle} onRemove={onRemove} todos={todos} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
