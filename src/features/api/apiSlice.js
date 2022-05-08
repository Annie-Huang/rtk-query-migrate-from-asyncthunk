import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This is so we can use the db.json file store in the local??
export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({}),
});
