import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../../store/auth/authActions';
import styles from './LoginScreen.styles';
import {createAction} from '@reduxjs/toolkit';
const logout = createAction('user/logout');
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
const LoginScreen = ({navigation}) => {
  const {loading, userInfo, error} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const onChangeEmail = value => {
    console.log(value);
    setEmail(value);
  };

  const onChangePassword = value => {
    console.log(value);
    SetPassword(value);
  };
  const onPressLogin = () => {
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
    if (userInfo) {
      alert(JSON.stringify(userInfo));
    }
  }, [userInfo]);

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
      <View>
        <TouchableOpacity onPress={onPressLogin} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
