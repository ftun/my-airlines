import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import countriesReducer from './reducers/countries';
import bookingReducer from './reducers/booking';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countries: countriesReducer,
    booking: bookingReducer,
  },
});
