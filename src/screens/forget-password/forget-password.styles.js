import {View, StyleSheet, Platform, StatusBar} from 'react-native';
import Colors from '../../utils/colors';
import {ColorSpace} from 'react-native-reanimated';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  subContainer: {
    margin: 20,
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: Colors.BLACK,
  },

  inputContainer: {
    margin: 40,
    width: '90%',
    alignItems: 'center',
  },
  textInputEmail: {
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: '80%',
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

  buttonNextContainer: {
    flex: 1,
    width: '50%',
  },
  buttonNext: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 40,
    width: '80%',
    height: 40,
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'center',
  },

  textButtonNext: {
    color: Colors.WHITE,
  },
});

export default styles;
