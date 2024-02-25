// Dev Modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import PlateTabs from './tabs';
import { GoalsProvider } from './GoalsContext';

// Root
const App = () => {
  return (
    <GoalsProvider>
      <NavigationContainer>
        <PlateTabs />
      </NavigationContainer>
    </GoalsProvider>
  );
};

export default App;
