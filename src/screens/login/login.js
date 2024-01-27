import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../store/auth/authActions';
import styles from './login.styles';
import {createAction} from '@reduxjs/toolkit';
import {ActivityIndicator, AppState, Linking, Platform} from 'react-native';
import {io} from 'socket.io-client';
import {onesignalConfig} from '../../../configs/configs';
import OneSignal from 'react-native-onesignal';
import PushNotification, {Importance} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
const logout = createAction('user/logout');
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  i,
} from 'react-native';
const Login= ({navigation}) => {
  const [counter, setCounter] = useState(0);
  const {loading, userInfo, error} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const username = 'zuck';
  const password = 'poniesRgr8';

  // Store the credentials
  const setKeyChain=async()=>{
   await Keychain.setGenericPassword(username, password);
  }
 
const getKeyChain=async()=>{
  try {
    // Retrieve the credentials
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log(
        'Credentials successfully loaded for user ' + credentials.username
      );
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
}

  const onChangeEmail = value => {
    console.log(value);
    setEmail(value);
  };

  const onChangePassword = value => {
    console.log(value);
    SetPassword(value);
  };
  const onPressLogin = async () => {
    setKeyChain();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (Email === '' || Password === '') {
      alert('Please enter your credential!');
    } else if (!emailRegex.test(Email)) {
      alert('Please enter a valid email');
    } else {
      console.log('sucess!');
      let data = {
        email: Email,
        password: Password,
      };
      dispatch(userLogin(data));
    }
  };
  // redirect authenticated user to profile screen
  useEffect(() => {
    console.log('userInfo');
    getKeyChain();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.textWelcome}>Welcome to</Text>
        <Text style={styles.textApp}>CarWash application</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputEmail}
          placeholder="Enter Email"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => onChangeEmail(text)}
        />
        <TextInput
          style={styles.textInputPassword}
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          onChangeText={text => onChangePassword(text)}
        />
      </View>

      <View style={styles.forgetPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Password')}>
          <Text style={styles.textButtonForget}>Forget password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.textButtonSignup}>Signup</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <ActivityIndicator color={'red'} />
        </View>
      ) : null}

      <View>
        <TouchableOpacity onPress={onPressLogin} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
