import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo'; //relative path
import ListTodo from './components/todo/list.todo';
import { useState } from 'react';

export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const addTodo = (text: string) => {

    const newTodo = { id: getRandomArbitrary(1, 1000), title: text }
    setTodoList([...todoList, newTodo])

  }

  const deleteTodo = (id: number) => {
    const newList = todoList.filter(item => item.id !== id);
    setTodoList(newList)
  }


  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <InputTodo addTodo={addTodo} />
        <ListTodo
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10

  },
});
