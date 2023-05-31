/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import MyStack from './src/navigation/index';
import SplashScreen from 'react-native-splash-screen';

import 'react-native-gesture-handler';
function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
