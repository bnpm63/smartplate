import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from './home';
import Login from './login';
import Food from './food';
import Friends from './friends';

// style library
import styles from './styles';

const Tab = createBottomTabNavigator();

const PlateTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: '#000000',
				tabBarInactiveTintColor: '#FFFFFF',
				tabBarActiveBackgroundColor: '#777777',
				tabBarInactiveBackgroundColor: '#777777',

				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				name="Food"
				component={Food}
				options={{ title: 'Food' }}
			/>
			<Tab.Screen
				name="Friends"
				component={Friends}
				options={{ title: 'Friends' }}
			/>
			<Tab.Screen
				name="Login"
				component={Login}
				options={{ title: 'Login' }}
			/>
			
			
		</Tab.Navigator>
	);
};

export default PlateTab;



// THIS IS THE ORIGINAL STYLE OF THE NON FUNCTIONAL TAB-bar
      {/* <View style={styles.navbar}>
        <TouchableOpacity onPress={() => handleNavPress('Home')} style={styles.nav_button}>
          <Image source={require('../smartplate/assets/home.png')} style={styles.nutrition_icon} />
          <Text style={{ fontSize: 12, fontWeight: 500, color: '#777777' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavPress('Food')} style={styles.nav_button}>
          <Image source={require('../smartplate/assets/restaurant.png')} style={styles.nutrition_icon} />
          <Text style={{ fontSize: 12, fontWeight: 500, color: '#777777' }}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavPress('Leaderboard')} style={styles.nav_button}>
          <Image source={require('../smartplate/assets/leaderboard.png')} style={styles.nutrition_icon} />
          <Text style={{ fontSize: 12, fontWeight: 500, color: '#777777' }}>Leaderboard</Text>
        </TouchableOpacity>

      </View> */}