import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './login.styles';
import {createAction} from '@reduxjs/toolkit';
import {ActivityIndicator, AppState, Linking, Platform} from 'react-native';
import {io} from 'socket.io-client';
import {onesignalConfig} from '../../../configs/configs';
import OneSignal from 'react-native-onesignal';
import PushNotification, {Importance} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Button} from '@rneui/themed';
import * as Keychain from 'react-native-keychain';
import * as yup from 'yup';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
const logout = createAction('user/logout');
import {
  View,
  SafeAreaView,
  Text,
  // TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  useAuthMutation,
  useGetMissionsQuery,
  useGetProfileMutation,
} from '../../store/slices/apiSlice';
import {logIn, logOut} from '../../store/slices/authSlice';
import {store} from '../../store/store';

const Login = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  // const {loading, userInfo, error} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  // console.log(store.getState());
  const [show, setShow] = useState(false);
  const passwordChange = () => {
    setVisiblePassword(!visiblePassword);
  };

  const username = 'zuck';
  const password = 'poniesRgr8';

  // Store the credentials
  const setKeyChain = async () => {
    await Keychain.setGenericPassword(username, password);
  };

  const getKeyChain = async () => {
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log(
          'Credentials successfully loaded for user ' + credentials.username,
        );
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };

  const onPressLogin = async () => {
    setKeyChain();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email === '') {
      setIsEmailValid(false);
    } else if (Password === '') {
      setIsPasswordValid(false);
    } else if (!emailRegex.test(Email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setIsPasswordValid(true);
      console.log('sucess!');
      let data = {
        email: Email,
        password: Password,
      };

      login(data);
    }
  };

  const onPressLogin1 = data => {
    setKeyChain();

    login(data);
  };

  useEffect(() => {
    console.log('userInfo');
    getKeyChain();
  }, []);
  const [
    login,
    {
      isLoading: loginIsLoading,
      isError: loginIsError,
      isSuccess: loginIsSuccess,
      data: loginData,
      error: loginError,
    },
  ] = useAuthMutation();
  useEffect(() => {
    if (loginData) {
      dispatch(logIn(loginData));
    }
  }, [loginData, loginIsSuccess, loginError]);

  useEffect(() => {
    if (loginError) {
      alert(loginError.data?.message);
    }
  }, [loginIsError]);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.textWelcome}>Welcome to</Text>
        <Text style={styles.textApp}>CarWash application</Text>
      </View>
      <View style={styles.inputContainer}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
            onPressLogin1(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <Input
                name="email"
                placeholder="Email"
                containerStyle={{width: '90%'}}
                labelStyle={{color: 'black', marginTop: -5}}
                errorStyle={{}}
                inputContainerStyle={styles.inputStyle}
                inputStyle={{
                  fontSize: 16,
                }}
                // renderErrorMessage={isEmailValid}
                // errorMessage={!isEmailValid ? 'Email required or not valid!' : ''}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Input
                name="password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                containerStyle={{width: '90%'}}
                labelStyle={{color: 'black', marginTop: -5}}
                errorStyle={{}}
                inputContainerStyle={styles.inputStyle}
                inputStyle={{
                  fontSize: 16,
                }}
                // renderErrorMessage={isPasswordValid}
                // errorMessage={!isPasswordValid ? 'Password is required' : ''}
                autoCapitalize="none"
                autoCorrect={false}
                rightIcon={() => (
                  <TouchableOpacity
                    onPress={() => {
                      passwordChange();
                    }}>
                    <Icon
                      name={visiblePassword ? 'eye-off' : 'eye'}
                      size={25}
                    />
                  </TouchableOpacity>
                )}
                maxLength={27}
                secureTextEntry={visiblePassword}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <View style={styles.forgetPasswordContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Password')}>
                  <Text style={styles.textButtonForget}>Forget password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.textButtonSignup}>Signup</Text>
                </TouchableOpacity>
              </View>
              {loginIsLoading ? (
                <View style={styles.inputContainer}>
                  <ActivityIndicator color={'red'} />
                </View>
              ) : null}
              <View style={{width: '100%'}}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.buttonLogin}>
                  <Text style={styles.textButtonLogin}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
export default Login;
