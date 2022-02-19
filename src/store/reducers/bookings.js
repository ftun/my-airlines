import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
};

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
});

export const { addBookings, removeBookings, setInitialBookings } = bookings.actions;

export default bookings.reducer;