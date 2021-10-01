import React from 'react';
import {Dimensions, Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import trash from '../assets/media/trash.png';
import Swipeout from 'react-native-swipeout';
import ToggleIsDoneButtonStyles from '../assets/styles/ToggleIsDoneButton.styles';
import check from '../assets/media/check.png';


const ToDoItem = ({task, isDone, deleteTask, changeIsDone}) => {


    const swipeoutBtns = [
        {
            component: <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: 'white',


            }}><Image source={trash}
                      style={{
                          width: 25,
                          height: 25,
                      }}/>
            </View>,
            onPress: deleteTask,

        },
    ];


    return (
        <Swipeout style={{backgroundColor: 'transparent'}}
                  right={swipeoutBtns}>
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
                            <Image source={check}/>
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
        </Swipeout>
    );

};


export default ToDoItem;
