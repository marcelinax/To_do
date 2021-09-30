import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {addToDo} from '../state/toDosSlice';

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
    <View>
      <TextInput onChangeText={text => setTask(text)} value={task} />
      <Button title={'Create task'} onPress={addTask} />
    </View>
  );
};

export default ToDoFormScreen;
