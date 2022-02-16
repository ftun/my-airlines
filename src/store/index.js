import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import countriesReducer from './reducers/countries';
import currentSearchReducer from './reducers/currentSearch';
import schedulesReducer from './reducers/schedules';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        countries: countriesReducer,
        currentSearch: currentSearchReducer,
        schedules: schedulesReducer,
    },
});
