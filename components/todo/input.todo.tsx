
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import * as React from 'react';
import { useState } from 'react';
import MyButton from "../button/my.button";

interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {

    const { addTodo } = props;

    const [todo, setTodo] = useState<string>('');

    const handleAddTodo = (text: string) => {
        if (!text) {
            Alert.alert('Lỗi', 'Todo không được để trống')
        } else {
            addTodo(text);
            setTodo('');
        }
    }

    const styles = StyleSheet.create({
        todoInput: {
            borderColor: 'grey',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            borderRadius: 10,
            marginTop: 20
        }
    })

    return (
        <>
            <View>
                <TextInput
                    onChangeText={(v) => setTodo(v)}
                    value={todo}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.todoInput}
                    keyboardAppearance="dark"
                />

                <MyButton
                    onPress={handleAddTodo}
                    title={todo}
                />
            </View>
        </>
    )
}

export default InputTodo;