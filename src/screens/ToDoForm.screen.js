import React, {useState} from 'react';
import {Dimensions, Image, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {addToDo} from '../state/toDosSlice';
import left from '../assets/media/left.png';

const ToDoFormScreen = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [task, setTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toDos = useSelector(state => state.toDos.toDos);

    const addTask = () => {
        if (task === '') {
            setErrorMessage('Enter a task');
            return;
        }
        if (toDos.map(toDo => toDo).includes(task)) {
            setErrorMessage('This task already exists');
        } else {
            dispatch(addToDo({task, isDone: false}));
            history.push('/');
        }
    };

    return (
        <View style={{
            padding: 16,

            justifyContent: 'center',
            height: Dimensions.get('window').height,
        }}>
            <TouchableWithoutFeedback style={{position: 'absolute', top: 16, right: 16}}
                                      onPress={() => history.push('/')}>
                <Image source={left} style={{position: 'absolute', top: 16, right: 16}}/>
            </TouchableWithoutFeedback>
            <TextInput onChangeText={text => setTask(text)} value={task} placeholder={'Task...'}
                       style={{
                           borderBottomWidth: 1,
                           borderBottomColor: '#7571712D',
                           padding: 8,
                       }}/>
            <Text style={{color: 'red', fontSize: 13, marginTop: 5, marginBottom: 10}}>{errorMessage}</Text>
            <TouchableWithoutFeedback onPress={addTask}>
                <View style={{
                    backgroundColor: 'black', borderRadius: 10, padding: 15,
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <Text style={{color: 'white', fontSize: 16}}>CREATE TASK</Text>
                </View>

            </TouchableWithoutFeedback>

        </View>
    );
};

export default ToDoFormScreen;
