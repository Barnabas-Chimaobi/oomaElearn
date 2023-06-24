import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../../redux/store';
import {BaseUrl} from '../baseUrl';

export const authServices = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (headers, api) => {
      const {
        // auth: {accessToken},
      } = api.getState() as RootState;
      //   headers.set('authorization', `Bearer ${accessToken}`);

      return headers;
    },
  }),

  // tagTypes: ["Integrators"],

  endpoints: builder => ({
    login: builder.mutation({
      query: (body: {username: string; password: string}) => {
        return {
          url: '/Login',
          method: 'POST',
          body,
        };
      },
    }),

    signup: builder.mutation({
      query: (body: {
        firstName: string;
        surName: string;
        emailAddress: string;
        phoneNo: string;
        password: string;
        lastName: string;
      }) => {
        return {
          url: '/SignUp',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useLoginMutation, useSignupMutation} = authServices;
