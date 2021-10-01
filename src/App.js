import React from 'react';

import {View} from 'react-native';
import {Provider} from 'react-redux';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from './screens/Home.screen';
import ToDoFormScreen from './screens/ToDoForm.screen';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>

            <View>
                <NativeRouter>
                    <Route path={'/'} exact component={HomeScreen}/>
                    <Route path={'/form'} component={ToDoFormScreen}/>
                </NativeRouter>
            </View>

        </Provider>
    );
};

export default App;
