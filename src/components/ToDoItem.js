import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import check from '../assets/media/check.png';
import ToggleIsDoneButtonStyles from '../assets/styles/ToggleIsDoneButton.styles';

const ToDoItem = ({task, isDone, deleteTask, changeIsDone}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
        width: Dimensions.get('window').width - 52,
        elevation: 10,
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
      }}>
      {isDone ? (
        <Text
          style={{
            fontSize: 16,
            opacity: 0.1,
            textDecorationLine: 'line-through',
          }}>
          {task}
        </Text>
      ) : (
        <Text style={{fontSize: 16}}>{task}</Text>
      )}

      {isDone ? (
        <TouchableWithoutFeedback onPress={changeIsDone}>
          <View
            style={{
              ...ToggleIsDoneButtonStyles.button,
              backgroundColor: '#41D0B3',
              overflow: 'hidden',
            }}>
            <Image source={check} />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={changeIsDone}>
          <View
            style={{
              ...ToggleIsDoneButtonStyles.button,
              backgroundColor: 'white',
            }}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default ToDoItem;
