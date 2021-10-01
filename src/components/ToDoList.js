import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ToDoItem from './ToDoItem';
import {deleteToDo, toggleIsDone} from '../state/toDosSlice';

const ToDoList = ({tasksType}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.toDos.toDos);

    console.log(tasks);
    const renderAllTasks = () => {
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
    const renderDoneTasks = () => {

        const doneTasks = tasks.filter(task => task.isDone);
        return doneTasks.length > 0 ? (doneTasks.map(toDo => (
                    <ToDoItem
                        task={toDo.task}
                        key={toDo.task}
                        isDone={toDo.isDone}
                        deleteTask={() => dispatch(deleteToDo(toDo.task))}
                        changeIsDone={() => dispatch(toggleIsDone(toDo))}
                    />
                ))
            ) :
            (
                <></>
            );
    };

    const renderNotDoneTasks = () => {
        const notDoneTasks = tasks.filter(task => !task.isDone);
        return notDoneTasks.length > 0 ? (notDoneTasks.map(toDo => (
                    <ToDoItem
                        task={toDo.task}
                        key={toDo.task}
                        isDone={toDo.isDone}
                        deleteTask={() => dispatch(deleteToDo(toDo.task))}
                        changeIsDone={() => dispatch(toggleIsDone(toDo))}
                    />
                ))
            ) :
            (
                <></>
            );
    };

    const getTasksToRender = () => {
        if (tasksType === 1) {
            return renderAllTasks();

        }
        if (tasksType === 2) {
            return renderDoneTasks();

        }
        if (tasksType === 3) {
            return renderNotDoneTasks();

        }

    };

    return (
        <View style={{marginTop: 15, height: Dimensions.get('window').height}}>
            <ScrollView>{getTasksToRender()}</ScrollView>
        </View>
    );
};

export default ToDoList;
