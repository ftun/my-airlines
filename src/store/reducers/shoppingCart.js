import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: '',
    data: [],
};

// export const getDataSchedules = createAsyncThunk(
//     'schedules/fecthSchedules',
//     async () => {
//         try {
//             const response = await axios.get('https://demo1506766.mockable.io/schedules');
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             return [{}];
//         }
//     }
// );

export const shoppingCartReducer = createSlice({
    name: 'sopphingCart',
    initialState,
    reducers: {
        addShoppingCart: (state, action) => {
            state.data.push(action.payload)
        },
        removeShoppingCart: (state, action) => {
            state.data = state.data.filter(d => d.id !== action.payload);
        }
        // getListAerolinea: (state, action) => {
        //     let data = state.data;
        //     return data.map(d => d.aeolineas);
        //     // return state[action.payload];
        // },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getDataSchedules.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(getDataSchedules.fulfilled, (state, action) => {
    //             state.status = 'successfull';
    //             state.data = action.payload;
    //             state.listAerolineas = [...new Set(action.payload.map(d => d.aerolinea))];
    //         });
    // },
});

export const { addShoppingCart, removeShoppingCart } = shoppingCartReducer.actions;

export default shoppingCartReducer.reducer;