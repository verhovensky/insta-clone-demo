import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainMenuNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainMenuNavigation />
    </NavigationContainer>
  );
};

export default App;
