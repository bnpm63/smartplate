import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './home'
import Login from './login'
import Food from './food'
import Friends from './friends'


const Stack = createNativeStackNavigator();

const PlateStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
            initialRouteName ="Home"
            >
				<Stack.Screen
					name="Home"
					component={Home}
					options={{title:'Welcome'}}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{title: 'Food'}}
				/>
				<Stack.Screen
					name="Friends"
					component={Friends}
					options={{title: 'Friends'}}
				/>
				<Stack.Screen
					name="Food"
					component={Food}
					options={{title: 'Food'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default PlateStack;