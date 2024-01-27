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
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputEmail: {
    borderColor: Colors.PURPLE,
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: '70%',
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
});

export default styles;
