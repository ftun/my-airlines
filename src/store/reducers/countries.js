import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
};

export const getDataCountries = createAsyncThunk(
    'countries/fecthCountries',
    async () => {
        try {
            const response = await axios.get('https://demo1506766.mockable.io/countries');
            return response.data;
        } catch (error) {
            console.error(error);
            return [{}];
        }
    }
);

export const countriesReducer = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        selectItem: (state, action) => {
            return state[action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDataCountries.fulfilled, (state, action) => {
                state.status = 'successfull';
                state.data = action.payload;
            });
    },
});

export default countriesReducer.reducer;