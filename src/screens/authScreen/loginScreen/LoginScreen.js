import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const LoginScreen = ({navigation}) => {
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
    }
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 22, color: 'red'}}>Welcome to</Text>

        <Text style={{fontSize: 22, color: 'black'}}>CarWash application</Text>
      </View>
      <View
        style={{
          marginTop: '20%',
          height: '30%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '70%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="Enter Email"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => onChangeEmail(text)}
        />
        <TextInput
          style={{
            mode: 'outlined',
            borderColor: '#7a42f4',
            borderWidth: 1,
            borderRadius: 25,
            height: 40,
            width: '70%',
            margin: 15,
            paddingLeft: 15,
          }}
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          onChangeText={text => onChangePassword(text)}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Password')}>
          <Text style={{textDecorationLine: 'underline', margin: 15}}>
            Forget password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#7a42f4'}}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPressLogin}
          style={{
            backgroundColor: '#7a42f4',
            padding: 10,
            margin: 40,
            width: '70%',
            height: 40,
            alignItems: 'center',
            borderRadius: 25,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
