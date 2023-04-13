import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
