import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const ForgetPasswordScreen = () => {
  const [Email, setEmail] = useState('');

  const onChangeEmail = value => {
    console.log(value);
    setEmail(value);
  };

  const onPressNext = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (Email === '') {
      alert('Please enter your email!');
    } else if (!emailRegex.test(Email)) {
    } else {
      console.log('sucess!');
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 22, color: 'black'}}>Forget password</Text>
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 20, color: 'black'}}>Enter your email</Text>
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
          placeholder="Enter Email"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => onChangeEmail(text)}
        />
      </View>

      <View style={{flex: 1, width: '50%'}}>
        <TouchableOpacity
          onPress={onPressNext}
          style={{
            backgroundColor: '#7a42f4',
            padding: 10,
            margin: 40,
            width: '80%',
            height: 40,
            alignItems: 'center',
            borderRadius: 25,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ForgetPasswordScreen;
