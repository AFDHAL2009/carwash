import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Image, Alert} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import styles from './CustomSideBar.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../store/auth/authActions';
const CustomSideBar = props => {
  const dispatch = useDispatch();
  const [userImgUrl, setUserImgUrl] = useState(null);
  return (
    <View style={{flex: 1}}>
      <Ionicons.Button
        name="close"
        size={40}
        color="black"
        backgroundColor="white"
        underlayColor="transparent"
        style={{marginTop: 20}}
        onPress={() => props.navigation.closeDrawer()}></Ionicons.Button>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginTop: 5,
                justifyContent: 'center',
                justifyContent: 'center',
                marginRight: 50,
                alignItems: 'center',
              }}>
              {userImgUrl == null ? (
                <Avatar.Image
                  source={require('../../assets/images/Person-Icon.png')}
                  size={100}
                  style={{}}
                />
              ) : (
                <Avatar.Image
                  source={{uri: userImgUrl}}
                  size={100}
                  style={{}}
                />
              )}

              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 15,
                  alignContent: 'center',
                }}>
                <Title style={styles.title}>
                  {'firstName'} {'lastName'}
                </Title>
                <Title style={styles.email}>{'email'}</Title>
              </View>
            </View>
            <View style={styles.row}></View>
          </View>
          <View
            style={{
              marginLeft: 30,
            }}>
            <Drawer.Section>
              <DrawerItem
                label={() => (
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="home-outline" color={'blue'} size={30} />
                    <Text>Home</Text>
                  </View>
                )}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />

              <DrawerItem
                label={() => (
                  <View
                    style={{
                      flexDirection: 'column',
                      // backgroundColor: 'blue',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="account-outline" color={'blue'} size={30} />
                    <Text>Compte</Text>
                  </View>
                )}
                onPress={() => {
                  props.navigation.navigate('Account');
                }}
              />
              <DrawerItem
                label={() => (
                  <View
                    style={{
                      flexDirection: 'column',
                      // backgroundColor: 'blue',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="car" color={'blue'} size={30} />
                    <Text>Profile</Text>
                  </View>
                )}
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
               <DrawerItem
                label={() => (
                  <View
                    style={{
                      flexDirection: 'column',
                      // backgroundColor: 'blue',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="car" color={'blue'} size={30} />
                    <Text>Missions</Text>
                  </View>
                )}
                onPress={() => {
                  props.navigation.navigate('Missions');
                }}
              />
              <DrawerItem
                label={() => (
                  <View
                    style={{
                      flexDirection: 'column',
                      // backgroundColor: 'blue',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="gift-outline" color={'blue'} size={30} />
                    <Text>About us</Text>
                  </View>
                )}
                onPress={() => {
                  props.navigation.navigate('About');
                }}
              />
            </Drawer.Section>
          </View>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/mapCar.png')}
              style={{width: 50, height: 50}}
            />
            <Text style={{color: 'blue', alignSelf: 'center'}}>
              CarWash V{'1525'}
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'red'} size={size} />
          )}
          label={() => <Text style={{color: 'red'}}>Sign Out</Text>}
          onPress={() => {
            Alert.alert('Déconnexion', 'Etes-vous sur de se déconnecter?', [
              {text: 'OUI', onPress: () => dispatch(userLogout())},
              {text: 'Non', onPress: () => console.log('Exit canceled')},
            ]);
          }}
        />
      </Drawer.Section>
    </View>
  );
};
export default CustomSideBar;
