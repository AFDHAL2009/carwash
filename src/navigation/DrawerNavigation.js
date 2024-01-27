import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomSideBar from './customSideBar/CustomSideBar';
import Profile from '../screens/profile/profile';
import About from '../screens/about/about';
import Home from '../screens/home/home';
import Account from '../screens/account/account';


const Drawer = createDrawerNavigator();
const homeStack = createStackNavigator();
const accountStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="home"
        component={Home}
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
        component={Account}
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
        component={Home}
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
        component={Profile}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
