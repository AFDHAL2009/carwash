import AsyncStorage from '@react-native-async-storage/async-storage';
//import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    AsyncStorage.removeItem('persist:root');
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
