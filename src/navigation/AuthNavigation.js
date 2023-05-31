import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import LoginScreen from '../screens/authScreen/loginScreen/LoginScreen';
import SignupScreen from '../screens/authScreen/signupScreen/SignupScreen';
import ForgetPasswordScreen from '../screens/authScreen/forgetPasswordScreen/ForgetPasswordScreen';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        gestureEnabled: true,
      })}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Password"
        component={ForgetPasswordScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
