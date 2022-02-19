import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: '',
    data: [],
};

export const shoppingCartReducer = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addShoppingCart: (state, action) => {
            state.data.push(action.payload);
        },
        removeShoppingCart: (state, action) => {
            state.data = state.data.filter(d => d.id !== action.payload);
        },
        removePayItems: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const selectDataShoppingCart = (state) => state.shoppingCart.data;

export const itemsPay = (dataBookings) => (dispatch, getState) => {
    const dataShoppingCart = selectDataShoppingCart(getState());
    let idBookings = dataBookings.map(b => b.id);
    let newData = dataShoppingCart.filter(s => !idBookings.includes(s.id));
    dispatch(removePayItems(newData));
};

export const { addShoppingCart, removeShoppingCart, removePayItems } = shoppingCartReducer.actions;

export default shoppingCartReducer.reducer;