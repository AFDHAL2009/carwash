import {View, StyleSheet, Platform, StatusBar} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  welcomeContainer: {
    margin: 20,
  },
  textWelcome: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: Colors.RED,
  },
  textApp: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: Colors.BLACK,
  },
  inputContainer: {
    marginTop: '20%',
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputEmail: {
    borderColor: Colors.PURPLE,
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: '100%',
    margin: 15,
    paddingLeft: 15,
  },
  textInputPassword: {
    mode: 'outlined',
    borderColor: Colors.PURPLE,
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: '70%',
    margin: 15,
    paddingLeft: 15,
  },
  forgetPasswordContainer: {
    alignItems: 'center',
  },
  textButtonForget: {
    textDecorationLine: 'underline',
    margin: 15,
  },
  textButtonSignup: {
    color: Colors.PURPLE,
  },
  buttonLogin: {
    backgroundColor: Colors.PURPLE,
    padding: 10,
    margin: 40,
    width: '70%',
    height: 40,
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'center',
  },
  textButtonLogin: {
    color: Colors.WHITE,
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    marginTop: -15,
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 45,
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default styles;
