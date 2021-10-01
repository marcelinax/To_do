import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ToDoItem from './ToDoItem';
import {deleteToDo, toggleIsDone} from '../state/toDosSlice';

const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.toDos.toDos);

  console.log(tasks);
  const renderTasks = () => {
    return tasks.length > 0 ? (
      tasks.map(toDo => (
        <ToDoItem
          task={toDo.task}
          key={toDo.task}
          isDone={toDo.isDone}
          deleteTask={() => dispatch(deleteToDo(toDo.task))}
          changeIsDone={() => dispatch(toggleIsDone(toDo))}
        />
      ))
    ) : (
      <></>
    );
  };

  return (
    <View style={{marginTop: 15}}>
      <ScrollView>{renderTasks()}</ScrollView>
    </View>
  );
};

export default ToDoList;
