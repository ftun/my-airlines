import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: '',
    data: {},
};

export const currentSearchReducer = createSlice({
    name: 'reservas',
    initialState,
    reducers: {
        setCurrentSearch: (state, action) => {
            state.data = {...action.payload};
        }
    },
});

export const { setCurrentSearch } = currentSearchReducer.actions;

export default currentSearchReducer.reducer;