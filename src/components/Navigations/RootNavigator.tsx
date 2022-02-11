import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthencationNavigator} from './AuthencationNavigations';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthencationNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
