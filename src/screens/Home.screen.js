import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import grid from '../assets/media/grid.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToDos} from '../state/toDosSlice';
import {useDispatch} from 'react-redux';
import ToDoList from '../components/ToDoList';
import AddTaskButton from '../components/AddTaskButton';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const [tasksType, setTasksType] = useState(1);

    const getToDos = async () => {
        try {
            const toDos = await AsyncStorage.getItem('@toDos');
            return toDos ? JSON.parse(toDos) : '[]';
        } catch (e) {
        }
    };

    const getHeading = () => {
        if (tasksType === 1) {
            return 'All tasks';
        }
        if (tasksType === 2) {
            return 'Done tasks';
        }
        if (tasksType === 3) {
            return 'Not done tasks';
        }

    };

    const changeHeading = () => {
        if (tasksType === 1) {
            setTasksType(2);
        }
        if (tasksType === 2) {
            setTasksType(3);
        }
        if (tasksType === 3) {
            setTasksType(1);
        }

    };

    useEffect(() => {
        getToDos().then(toDos => dispatch(setToDos(toDos)));
    }, [dispatch]);

    return (
        <View style={{padding: 16, backgroundColor: 'white'}}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <TouchableHighlight
                    onPress={() => {
                        changeHeading();
                    }}
                    style={{overflow: 'hidden', position: 'absolute', top: 0, left: 0}}
                    underlayColor={'transparent'}>
                    <Image source={grid} style={{width: 30, height: 30}}/>
                </TouchableHighlight>
                <Text style={{fontSize: 22}}>{getHeading()}</Text>
            </View>
            <ToDoList tasksType={tasksType}/>
            <AddTaskButton/>
        </View>
    );
};

export default HomeScreen;
