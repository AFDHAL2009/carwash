import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import profileScreen from '../screens/profileScreen/ProfileScreen';
import aboutScreen from '../screens/aboutScreen/AboutScreen';
import homeScreen from '../screens/homeScreen/HomeScreen';
import accountScreen from '../screens/accountScreen/AccountScreen';
import CustomSideBar from './customSideBar/CustomSideBar';

const Drawer = createDrawerNavigator();
const homeStack = createStackNavigator();
const accountStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="home"
        component={homeScreen}
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
        component={accountScreen}
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
        options={{title: 'Home'}}></Drawer.Screen>
      <Drawer.Screen
        name="Account"
        component={AccountStackScreen}
        options={{title: 'Account'}}></Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={profileScreen}
        options={{title: 'Profile'}}></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={aboutScreen}
        options={{title: 'About'}}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
