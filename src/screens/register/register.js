import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {APP_ID, API} from '../../../utils/utils';
import styles from './register.styles';
//import {Button} from 'react-native-paper';
import {Input, Button} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Formik, useFormikContext} from 'formik';
import * as yup from 'yup';
import moment from 'moment/moment';
import {useRegisterMutation} from '../../store/slices/apiSlice';
const Register = () => {
  const {loading, userInfo, error, success} = useSelector(state => state.auth);
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(true);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [firstStep, setFirstStep] = useState(true);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [isFocusCity, setIsFocusCity] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [isFocusType, setIsFocusType] = useState(false);
  const [valueModel, setValueModel] = useState(null);
  const [isFocusModel, setIsFocusModel] = useState(false);
  const [valueYear, setValueYear] = useState(null);
  const [isFocusYear, setIsFocusYear] = useState(false);

  const [
    register,
    {
      isLoading: registerIsLoading,
      isError: registerIsError,
      isSuccess: registerIsSuccess,
      data: registerData,
      error: registerError,
    },
  ] = useRegisterMutation();

  useEffect(() => {
    if (registerIsSuccess) {
      alert('success');
    }
    if (registerError) {
      alert(registerError.data?.message);
    }
  }, [registerIsSuccess, registerIsError]);

  const handleRegister = data => {
    register(data);
  };

  const DriverInfo = () => {
    const onChangeDate = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
      // setSearchValue(moment(currentDate).format('L').toString());
      console.log(moment(currentDate).format('L').toString());
    };
    const passwordChange = () => {
      setVisiblePassword(!visiblePassword);
    };
    const passwordConfirmChange = () => {
      setVisibleConfirmPassword(!visibleConfirmPassword);
    };
    const signUpValidationSchema = yup.object().shape({
      firstName: yup
        .string()
        .min(3, ({min}) => `firstName must be at least ${min} characters`)
        .required('FirstName is required'),

      lastName: yup
        .string()
        .min(3, ({min}) => `lastName must be at least ${min} characters`)
        .required('lastName is required'),
      birthDate: yup.string().required('Birthdate  is required'),
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
      password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .matches(
          /[!@#$%^&*()\-_"=+{}; :,<.>]/,
          'Password must have a special character',
        )
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
      phone: yup
        .string()
        .matches(/(06)(\d){8}\b/, 'Enter a valid phone number')
        .required('Phone number is required'),
    });

    return (
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              birthDate: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone: '',
            }}
            onSubmit={values => {
              console.log(values);
              setFirstStep(false);
            }}>
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              setFieldValue,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <Input
                  name="firstName"
                  label="FirstName"
                  placeholder="FirstName"
                  containerStyle={{width: '90%', marginTop: 20}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
                  autoCorrect={false}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && (
                  <Text style={styles.errorText}>{errors.firstName}</Text>
                )}

                <Input
                  name="lastName"
                  label="LastName"
                  placeholder="lastName"
                  containerStyle={{width: '90%'}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
                  autoCorrect={false}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && (
                  <Text style={styles.errorText}>{errors.lastName}</Text>
                )}
                <Input
                  name="birthDate"
                  label="birthDate"
                  placeholder="Date"
                  containerStyle={{width: '90%'}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
                  showSoftInputOnFocus={false}
                  autoCorrect={false}
                  onChangeText={handleChange('birthDate')}
                  onBlur={handleBlur('birthDate')}
                  value={values.birthDate}
                  rightIcon={() => (
                    <TouchableOpacity
                      onPress={() => {
                        setShow(true);
                      }}>
                      <Icon name={'calendar-range-outline'} size={25} />
                    </TouchableOpacity>
                  )}
                />
                {errors.birthDate && touched.birthDate && (
                  <Text style={styles.errorText}>{errors.birthDate}</Text>
                )}
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate;
                      setShow(false);
                      setDate(selectedDate);
                      setFieldValue(
                        'birthDate',
                        moment(selectedDate).format('DD/MM/YYYY').toString(),
                      );
                      console.log(
                        moment(currentDate).format('DD/MM/YYYY').toString(),
                      );
                    }}
                  />
                )}
                <Input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  containerStyle={{width: '90%'}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <Input
                  name="password"
                  label="Password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  containerStyle={{width: '90%'}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
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
                <Input
                  name="confirmPassword"
                  label={'Confirm password'}
                  placeholder=" Confirm password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  containerStyle={{width: '90%'}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  rightIcon={() => (
                    <TouchableOpacity
                      onPress={() => {
                        passwordConfirmChange();
                      }}>
                      <Icon
                        name={visibleConfirmPassword ? 'eye-off' : 'eye'}
                        size={25}
                      />
                    </TouchableOpacity>
                  )}
                  maxLength={27}
                  secureTextEntry={visibleConfirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
                <Input
                  name="phone"
                  label="Phone"
                  placeholder="Phone"
                  containerStyle={{width: '90%'}}
                  labelStyle={{color: 'black', marginTop: -5}}
                  errorStyle={{}}
                  inputContainerStyle={styles.inputStyle}
                  inputStyle={{
                    fontSize: 16,
                  }}
                  keyboardType="numeric"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {errors.phone && touched.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: 35,
                    borderRadius: 25,
                    marginVertical: 15,
                  }}>
                  <Text>Next</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text>open</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  const VehicleInfo = () => {
    const vehicleValidationSchema = yup.object().shape({
      city: yup.string().required('City is required'),
      vehicleType: yup.string().required('Type is required'),
      vehicleModel: yup.string().required('Model is required'),
      manufactureYear: yup.string().required('Year is required'),
      registrationNumber: yup.string().required('Register number is required'),
    });

    const renderLabelCity = () => {
      if (valueCity || isFocusCity) {
        return (
          <Text style={[styles1.label, isFocusCity && {color: 'blue'}]}>
            City
          </Text>
        );
      }

      return null;
    };
    const renderLabelType = () => {
      if (valueType || isFocusType) {
        return (
          <Text style={[styles1.label, isFocusType && {color: 'blue'}]}>
            Vehicle type
          </Text>
        );
      }

      return null;
    };
    const renderLabelModel = () => {
      if (valueModel || isFocusModel) {
        return (
          <Text style={[styles1.label, isFocusModel && {color: 'blue'}]}>
            Vehicle model
          </Text>
        );
      }

      return null;
    };
    const renderLabelYear = () => {
      if (valueYear || isFocusYear) {
        return (
          <Text style={[styles1.label, isFocusYear && {color: 'blue'}]}>
            Manufacture year
          </Text>
        );
      }

      return null;
    };
    return (
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <Formik
            validationSchema={vehicleValidationSchema}
            initialValues={{
              city: '',
              vehicleType: '',
              vehicleModel: '',
              manufactureYear: '',
              registrationNumber: '',
            }}
            onSubmit={values => {
              console.log(values);
              handleRegister(values);
              // setFirstStep(false);
            }}>
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              setFieldValue,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={styles1.container}>
                  {renderLabelCity()}
                  <Dropdown
                    style={[
                      styles1.dropdown,
                      isFocusCity && {borderColor: 'blue'},
                    ]}
                    placeholderStyle={styles1.placeholderStyle}
                    selectedTextStyle={styles1.selectedTextStyle}
                    inputSearchStyle={styles1.inputSearchStyle}
                    iconStyle={styles1.iconStyle}
                    data={[
                      {label: 'Paris', value: 'Paris'},
                      {label: 'Lyon', value: 'Lyon'},
                      {label: 'Géneve', value: 'Géneve'},
                    ]}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusCity ? 'City' : '...'}
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onFocus={() => setIsFocusCity(true)}
                    onBlur={() => setIsFocusCity(false)}
                    onChange={item => {
                      setFieldValue('city', item.value);
                      setValueCity(item.value);
                      setIsFocusCity(false);
                    }}
                  />
                </View>
                {errors.city && (
                  <Text style={styles.errorText}>{errors.city}</Text>
                )}
                <View style={styles1.container}>
                  {renderLabelType()}
                  <Dropdown
                    style={[
                      styles1.dropdown,
                      isFocusType && {borderColor: 'blue'},
                    ]}
                    placeholderStyle={styles1.placeholderStyle}
                    selectedTextStyle={styles1.selectedTextStyle}
                    inputSearchStyle={styles1.inputSearchStyle}
                    iconStyle={styles1.iconStyle}
                    data={[
                      {label: 'Van', value: 'Van'},
                      {label: 'Break', value: 'Break'},
                      {label: 'Eco', value: 'Eco'},
                      {label: 'Prestige', value: 'Prestige'},
                    ]}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusType ? 'Type' : '...'}
                    value={values.vehicleType}
                    onChangeText={handleChange('vehicleType')}
                    onFocus={() => setIsFocusType(true)}
                    onBlur={() => setIsFocusType(false)}
                    onChange={item => {
                      setFieldValue('vehicleType', item.value);
                      setValueType(item.value);
                      setIsFocusType(false);
                    }}
                  />
                </View>
                {errors.vehicleType && (
                  <Text style={styles.errorText}>{errors.vehicleType}</Text>
                )}
                <View style={styles1.container}>
                  {renderLabelModel()}
                  <Dropdown
                    style={[
                      styles1.dropdown,
                      isFocusModel && {borderColor: 'blue'},
                    ]}
                    placeholderStyle={styles1.placeholderStyle}
                    selectedTextStyle={styles1.selectedTextStyle}
                    inputSearchStyle={styles1.inputSearchStyle}
                    iconStyle={styles1.iconStyle}
                    data={[
                      {
                        label: 'Audi',
                        value: 'Audi',
                      },
                      {label: 'Honda', value: 'Honda'},
                      {label: 'Lucid', value: 'Lucid'},
                      {label: 'Nissan', value: 'Nissan'},
                    ]}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusModel ? 'Model' : '...'}
                    value={values.vehicleModel}
                    onChangeText={handleChange('vehicleModel')}
                    onFocus={() => setIsFocusModel(true)}
                    onBlur={() => setIsFocusModel(false)}
                    onChange={item => {
                      setFieldValue('vehicleModel', item.value);
                      setValueModel(item.value);
                      setIsFocusModel(false);
                    }}
                  />
                </View>
                {errors.vehicleModel && (
                  <Text style={styles.errorText}>{errors.vehicleModel}</Text>
                )}

                <View style={styles1.container}>
                  {renderLabelYear()}
                  <Dropdown
                    style={[
                      styles1.dropdown,
                      isFocusYear && {borderColor: 'blue'},
                    ]}
                    placeholderStyle={styles1.placeholderStyle}
                    selectedTextStyle={styles1.selectedTextStyle}
                    inputSearchStyle={styles1.inputSearchStyle}
                    iconStyle={styles1.iconStyle}
                    data={[
                      {label: '2023', value: '2023'},
                      {label: '2022', value: '2022'},
                      {label: '2021', value: '2021'},
                      {label: '2020', value: '2020'},
                      {label: '2019', value: '2019'},
                      {label: '2018', value: '2018'},
                      {label: '2017', value: '2017'},
                    ]}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusYear ? 'Year' : '...'}
                    value={values.manufactureYear}
                    onChangeText={handleChange('manufactureYear')}
                    onFocus={() => setIsFocusYear(true)}
                    onBlur={() => setIsFocusYear(false)}
                    onChange={item => {
                      setFieldValue('manufactureYear', item.value);
                      setValueYear(item.value);
                      setIsFocusYear(false);
                    }}
                  />
                </View>
                {errors.manufactureYear && (
                  <Text style={styles.errorText}>{errors.manufactureYear}</Text>
                )}
                <View style={styles1.container}>
                  <TextInput
                    name="registrationNumber"
                    label="RegistrationNumber"
                    mode="outlined"
                    placeholder="RegistrationNumber"
                    outlineColor={'gray'}
                    activeOutlineColor={'gray'}
                    outlineStyle={{
                      borderColor: 'gray',
                      borderWidth: 0.5,
                      borderRadius: 8,
                    }}
                    style={{
                      width: '80%',
                      height: 50,
                      fontSize: 14,
                      backgroundColor: 'white',
                    }}
                    onChangeText={handleChange('registrationNumber')}
                    onBlur={handleBlur('registrationNumber')}
                    value={values.registrationNumber}
                  />
                </View>
                {errors.registrationNumber && (
                  <Text style={styles.errorText}>
                    {errors.registrationNumber}
                  </Text>
                )}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: '#7a42f4',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: 35,
                    borderRadius: 25,
                    marginVertical: 15,
                  }}>
                  <Text style={{color: 'white'}}>Register</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          {registerIsLoading ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 15,
              }}>
              <ActivityIndicator color={'#7a42f4'} />
            </View>
          ) : null}
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          margin:'15%',
        }}>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 22}}>
          {firstStep ? 'Driver informations' : 'Vehicle informations'}
        </Text>
      </View>

      {firstStep ? DriverInfo() : VehicleInfo()}
    </View>
  );
};
export default Register;

const styles1 = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: 16,
    // margin: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '80%',
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 14,
    zIndex: 999,
    paddingLeft: 10,
    fontSize: 14,
    marginLeft: 40,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  errorText: {
    fontSize: 10,
    textAlign: 'center',
    color: 'red',
    marginVertical: 5,
  },
});
