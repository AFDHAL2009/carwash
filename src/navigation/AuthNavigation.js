import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import ForgetPassword from '../screens/forget-password/forget-password';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        gestureEnabled: true,
      })}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Register}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Password"
        component={ForgetPassword}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
