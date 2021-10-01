import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import plus from '../assets/media/plus.png';

const AddTaskButton = () => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image source={plus} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddTaskButton;
