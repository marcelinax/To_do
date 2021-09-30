import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ToDoItem from './ToDoItem';
import {deleteToDo} from '../state/toDosSlice';

const ToDoList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.toDos.toDos);
  console.log(toDos);

  const renderToDos = () => {
    return toDos.length > 0 ? (
      toDos.map(toDo => (
        <ToDoItem
          task={toDo.task}
          key={toDo.task}
          isDone={toDo.isDone}
          deleteTask={() => dispatch(deleteToDo(toDo.task))}
        />
      ))
    ) : (
      <></>
    );
  };

  return (
    <View>
      <ScrollView>{renderToDos()}</ScrollView>
    </View>
  );
};

export default ToDoList;
