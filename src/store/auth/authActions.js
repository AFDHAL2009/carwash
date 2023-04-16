// authActions.js
import axios from 'axios';
import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backendURL = 'http://192.168.8.100:3000';
import {API} from '../../utils/utils';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({firstname, lastname, email, password, phone}, {rejectWithValue}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${backendURL}/api/auth/signup`,
        {firstname, lastname, email, password, phone},
        config,
      );
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({email, password}, {rejectWithValue}) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {data} = await axios.post(
        `${backendURL}/api/auth/login`,
        {email, password},
        config,
      );
      // store user's token in local storage
      console.log(data);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  },
);

export const userLogout = createAction('user/logout');
