import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import check from '../assets/media/check.png';

const ToDoItem = ({task, isDone, deleteTask}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
        width: Dimensions.get('window').width - 52,
        elevation: 10,
        margin: 10,

        backgroundColor: 'white',
        borderRadius: 20,
      }}>
      <Text style={{fontSize: 18}}>{task}</Text>
      {isDone ? (
        <TouchableWithoutFeedback>
          <Image source={check} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={deleteTask}>
          <Text>A</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default ToDoItem;
