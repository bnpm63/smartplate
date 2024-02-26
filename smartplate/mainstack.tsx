import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import Settings from './settings';
import Login from './login';

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )
}

export default MainStack