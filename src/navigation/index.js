import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MyStack = () => {
  const {loading, userInfo, error} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {userInfo ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
export default MyStack;
