import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import AboutScreen from '../screens/aboutScreen/AboutScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AccountScreen from '../screens/accountScreen/AccountScreen';
import CustomSideBar from './customSideBar/CustomSideBar';

const Drawer = createDrawerNavigator();
const homeStack = createStackNavigator();
const accountStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></homeStack.Screen>
    </homeStack.Navigator>
  );
};

const AccountStackScreen = () => {
  return (
    <accountStack.Navigator>
      <accountStack.Screen
        name="account"
        component={AccountScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></accountStack.Screen>
    </accountStack.Navigator>
  );
};
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomSideBar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
