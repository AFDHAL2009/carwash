// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiBaseUrl = 'https://car-backend-one.vercel.app';

// Define a service using a base URL and expected endpoints
export const carwashApi = createApi({
  reducerPath: 'carwashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers, {getState}) => {
      console.log('prepareHeaders is called' + JSON.stringify(getState()));
      const token = getState().auth.userDetails.token; // we are now consuming token from new created authSlice
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        console.log('token=' + token);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    auth: builder.mutation({
      query: credentials => ({
        url: '/api/driver/login',
        method: 'POST',
        body: credentials,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    register: builder.mutation({
      query: data => ({
        url: '/api/driver/register',
        method: 'POST',
        body: data,
      }),
    }),
    getMissions: builder.query({
      query: () => ({
        url: '/api/mission/all',
        method: 'GET',
      }),
    }),
    getProfile: builder.mutation({
      query: () => ({
        url: '/user/profile',
        method: 'POST',
      }),
    }),
    updateProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'PUT',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAuthMutation,
  useGetMissionsQuery,
  useGetProfileMutation,
  useUpdateProfileQuery,
  useRegisterMutation,
} = carwashApi;
