import React, {useEffect} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import grid from '../assets/media/grid.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToDos} from '../state/toDosSlice';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import ToDoList from '../components/ToDoList';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getToDos = async () => {
    try {
      const toDos = await AsyncStorage.getItem('@toDos');
      return toDos ? JSON.parse(toDos) : '[]';
    } catch (e) {}
  };

  useEffect(() => {
    getToDos().then(toDos => dispatch(setToDos(toDos)));
  }, []);

  return (
    <View style={{padding: 16, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableHighlight
          style={{overflow: 'hidden', position: 'absolute', top: 0, left: 0}}
          underlayColor={'transparent'}
          onPress={() => history.push('/form')}>
          <Image source={grid} />
        </TouchableHighlight>
        <Text style={{fontSize: 18}}>All Tasks</Text>
      </View>
      <ToDoList />
    </View>
  );
};

export default HomeScreen;
