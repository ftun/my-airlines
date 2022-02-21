import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
    bookings: [],
    totalPay: 0,
};

export const postDataBookings = createAsyncThunk(
    'bookings/fecthBookings',
    async data => {
        try {
            const response = await axios.post('https://demo1506766.mockable.io/pay-bookings', data);
            return response.data;
        } catch (error) {
            console.error(error);
            return [{}];
        }
    }
);

export const getTotalItems = data => data.reduce((sum, b) => sum + b.precioFinal, 0);

export const bookings = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        addBookings: (state, action) => {
            let data = state.data;
            data.push(action.payload);
            state.data = data;
            state.totalPay = getTotalItems(data);
        },
        removeBookings: (state, action) => {
            let data = state.data.filter(d => d.id !== action.payload);
            state.data = data;
            state.totalPay = getTotalItems(data);
        },
        setInitialBookings: (state, action) => {
            let data = action.payload;
            state.data = data;
            state.totalPay = getTotalItems(data);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postDataBookings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postDataBookings.fulfilled, (state, action) => {
                state.status = 'successfull';
                state.bookings.push(action.meta.arg);
                state.data = [];
            });
    },
});

export const { addBookings, removeBookings, setInitialBookings } = bookings.actions;

export default bookings.reducer;