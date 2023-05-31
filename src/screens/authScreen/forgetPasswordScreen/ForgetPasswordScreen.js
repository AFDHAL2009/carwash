import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import styles from './ForgetPasswordScreen.styles';
import {Formik} from 'formik';
//import BottomSheet from 'react-native-simple-bottom-sheet';
//import BottomSheet from 'react-native-smooth-bottomsheet';
//import {Modalize} from 'react-native-modalize';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../../components/bottomSheet/BottomSheet';

import {
  GestureHandlerRootView,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
const ForgetPasswordScreen = () => {
  const inputRef = useRef();
  const panelRef = useRef(null);
  const bottomRef = useRef(null);
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

  const modalizeRef = useRef();

  const onOpen = () => {
    //modalizeRef.current?.open();
    modalizeRef.current?.open('top');
  };
  const onPress = useCallback(() => {
    const isActive = bottomRef.current?.isActive();
    if (!isActive) {
      bottomRef.current?.scrollTo(-200);
    } else {
      // bottomRef.current?.scrollTo(0);
    }
  }, []);
  const onClose = useCallback(async () => {
    bottomRef.current?.onClose();
    // const res = await multiply(5, 2);
    // alert(res);
  }, []);

  const persons = [
    {id: 0, name: 'afdhal1'},
    {id: 1, name: 'afdhal2'},
    {id: 2, name: 'afdhal3'},
    {id: 3, name: 'afdhal4'},
    {id: 4, name: 'afdhal5'},
    {id: 5, name: 'afdhal5'},
    {id: 6, name: 'afdhal6'},
    {id: 7, name: 'afdhal7'},
    {id: 8, name: 'afdhal8'},
    {id: 10, name: 'afdhal9'},
    {id: 11, name: 'afdhal10'},
    {id: 12, name: 'afdhal11'},
    {id: 13, name: 'afdhal12'},
  ];
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#111',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/*<SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textTitle}>Forget password</Text>
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
      </View>
      <Input
        ref={inputRef}
        placeholder="BASIC INPUT"
        renderErrorMessage={true}
        errorMessage={'incorrect'}
        rightIcon={<Icon name="close" size={20} />}
      />

      <View style={styles.buttonNextContainer}>
        <TouchableOpacity onPress={onPressNext} style={styles.buttonNext}>
          <Text style={styles.textButtonNext}>Next</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>*/}
        <TouchableOpacity
          style={{
            width: '20%',
            height: '6%',
            backgroundColor: 'yellow',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPress}>
          <Text>open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '6%',
            backgroundColor: 'yellow',
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
        <BottomSheet ref={bottomRef} OnOpen={() => console.log('ok')}>
          <FlatList
            data={persons}
            renderItem={({item}) => (
              <Text style={{padding: 20, fontSize: 15, marginTop: 5}}>
                {item.name}
              </Text>
            )}
            keyExtractor={item => item.id}
          />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};
export default ForgetPasswordScreen;
