// Dev Modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import PlateTabs from './tabs'

// Root
const App = () => {
	return (
		<NavigationContainer>
			<PlateTabs/>
		</NavigationContainer>
	);
};

export default App;