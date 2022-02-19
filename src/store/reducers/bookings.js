import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
    bookings: [],
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

export const bookings = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        addBookings: (state, action) => {
            state.data.push(action.payload);
        },
        removeBookings: (state, action) => {
            state.data = state.data.filter(d => d.id !== action.payload);
        },
        setInitialBookings: (state, action) => {
            state.data = action.payload;
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