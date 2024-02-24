// Dev Modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import PlateTabs from './tabs';
import { GoalsProvider } from './GoalsContext';
import MainStack from './mainstack';

// Root
const App = () => {
  return (
    <GoalsProvider>
      <NavigationContainer>
        <PlateTabs />
        <MainStack />
      </NavigationContainer>
    </GoalsProvider>
  );
};

export default App;
