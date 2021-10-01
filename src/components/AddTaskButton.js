import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import plus from '../assets/media/plus.png';
import AddTaskButtonStyles from '../assets/styles/AddTaskButton.styles';
import {useHistory} from 'react-router';

const AddTaskButton = () => {
  const history = useHistory();

  return (
    <TouchableWithoutFeedback onPress={() => history.push('/form')}>
      <View style={{...AddTaskButtonStyles.button}}>
        <Image source={plus} style={{width: 50, height: 50}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddTaskButton;
