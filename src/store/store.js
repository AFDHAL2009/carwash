import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import authSlice from './slices/authSlice';
import {carwashApi} from './slices/apiSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'key2'], //Things you want to persist
  blacklist: [carwashApi.reducerPath], //Things you don't want to persist
};
export const rootReducers = combineReducers({
  auth: authSlice,
  [carwashApi.reducerPath]: carwashApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carwashApi.middleware),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
