import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
    listAerolineas:[],
};

export const getDataSchedules = createAsyncThunk(
    'schedules/fecthSchedules',
    async () => {
        try {
            const response = await axios.get('https://demo1506766.mockable.io/schedules');
            return response.data;
        } catch (error) {
            console.error(error);
            return [{}];
        }
    }
);

export const schedulesReducer = createSlice({
    name: 'schedules',
    initialState,
    reducers: {
        getListAerolinea: (state, action) => {
            let data = state.data;
            return data.map(d => d.aeolineas);
            // return state[action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataSchedules.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDataSchedules.fulfilled, (state, action) => {
                state.status = 'successfull';
                state.data = action.payload;
                state.listAerolineas = [...new Set(action.payload.map(d => d.aerolinea))];
            });
    },
});

// export const { getListAerolinea } = schedulesReducer.actions;

export default schedulesReducer.reducer;