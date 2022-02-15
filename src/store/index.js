import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import countriesReducer from './reducers/countries';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countries: countriesReducer,
  },
});
