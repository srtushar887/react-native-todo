import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={style.input}
                placeholder='New Todo ...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
};

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});