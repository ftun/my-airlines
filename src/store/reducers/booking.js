import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
    status: '',
    data: [],
};

// export const getDataCountries = createAsyncThunk(
//     'countries/fecthCountries',
//     async () => {
//         try {
//             const response = await axios.get('http://demo1506766.mockable.io/countries');
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             return [{}];
//         }
//     }
// );

export const bookingReducer = createSlice({
    name: 'reservas',
    initialState,
    reducers: {
        setBooking: (state, action) => {
            // console.log('setBooking', state, action);
            state.data.push(action.payload)
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getDataCountries.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(getDataCountries.fulfilled, (state, action) => {
    //             state.status = 'successfull';
    //             state.data = action.payload;
    //         });
    // },
});

export const { setBooking } = bookingReducer.actions;

export default bookingReducer.reducer;