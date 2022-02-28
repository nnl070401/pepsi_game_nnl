import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import commit from '../Screens/commit';
import MainScreen from '../Screens/MainScreen';
import GamePlay from '../Screens/GamePlay'

const Stack = createStackNavigator();

export const AuthencationNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="commit" component={commit} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="GamePlay" component={GamePlay} />
    </Stack.Navigator>
  );
};
