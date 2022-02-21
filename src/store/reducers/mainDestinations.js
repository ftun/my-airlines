import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
};

export const getDataMainDestinations = createAsyncThunk(
    'mainDestinations/fecthMainDestinations',
    async () => {
        try {
            const response = await axios.get('https://demo1506766.mockable.io/main-destinations');
            return response.data;
        } catch (error) {
            console.error(error);
            return [{}];
        }
    }
);

export const mainDestinationsReducer = createSlice({
    name: 'mainDestinations',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataMainDestinations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDataMainDestinations.fulfilled, (state, action) => {
                state.status = 'successfull';
                state.data = action.payload;
            });
    },
});

// export const { getListAerolinea } = mainDestinationsReducer.actions;

export default mainDestinationsReducer.reducer;