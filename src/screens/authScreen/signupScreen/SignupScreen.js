import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {registerUser} from '../../../store/auth/authActions';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {APP_ID, API} from '../../../utils/utils';

const SignupScreen = () => {
  const {loading, userInfo, error, success} = useSelector(state => state.auth);
  const [FirstName, setFistName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] = useState('');
  const [phone, SetPhone] = useState('');
  const dispatch = useDispatch();
  const onChangeFirstName = value => {
    console.log(value);
    setFistName(value);
  };
  const onChangeLastName = value => {
    console.log(value);
    setLastName(value);
  };
  const onChangeEmail = value => {
    console.log(value);
    setEmail(value);
  };

  const onChangePassword = value => {
    console.log(value);
    SetPassword(value);
  };
  const onChangeConfirmPassword = value => {
    console.log(value);
    SetConfirmPassword(value);
  };
  const onChangePhone = value => {
    console.log(value);
    SetPhone(value);
  };

  const onPressRegister = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      FirstName === '' ||
      LastName === '' ||
      Email === '' ||
      Password === '' ||
      phone === '' ||
      confirmPassword === ''
    ) {
      alert('Please validate the fields');
    } else if (!emailRegex.test(Email)) {
      alert('Please enter a valid email');
    } else if (Password !== confirmPassword) {
      alert('Passwords not same');
    } else {
      console.log('sucess!');
      let data = {
        firstname: FirstName,
        lastname: LastName,
        email: Email,
        password: Password,
        phone: phone,
      };
      dispatch(registerUser(data));
    }
  };

  /* useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = {
      email: 'bouha@gmail.com',
      password: 'e1251',
    };
    const body = {
      firstname: 'bouha1',
      lastname: 'afdhal',
      email: 'bouha@gmail.com',
      password: 'e1251',
      phone: '499552',
    };

    API.post('api/auth/signup', body, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data.message));
  });*/

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) alert('success register');
    // redirect authenticated user to profile screen
    if (userInfo) alert('success get info');
  }, [userInfo, success]);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 22, color: 'black'}}>Register</Text>
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 20, color: 'black'}}>
          Enter your data to register
        </Text>
      </View>
      <View
        style={{
          margin: 40,
          width: '90%',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '80%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="FistName"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={text => onChangeFirstName(text)}
        />
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '80%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="LastName"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={text => onChangeLastName(text)}
        />
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '80%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="E-mail"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => onChangeEmail(text)}
        />
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '80%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          onChangeText={text => onChangePassword(text)}
        />
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '80%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="Confirm password"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          onChangeText={text => onChangeConfirmPassword(text)}
        />
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '80%',
            margin: 15,
            paddingLeft: 15,
          }}
          keyboardType="phone-pad"
          placeholder="Phone number"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          onChangeText={text => onChangePhone(text)}
        />
      </View>

      <View style={{flex: 1, width: '50%'}}>
        <TouchableOpacity
          onPress={onPressRegister}
          style={{
            backgroundColor: '#7a42f4',
            padding: 10,
            margin: 10,
            width: '80%',
            height: 40,
            alignItems: 'center',
            borderRadius: 25,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignupScreen;
