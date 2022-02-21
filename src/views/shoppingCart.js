import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';
import DetailItems from '../components/detailItems';
import { addBookings, removeBookings, setInitialBookings } from '../store/reducers/bookings';
import { removeShoppingCart } from '../store/reducers/shoppingCart';
import { sortArrayOfObject } from '../components/utils';

const ShoppingCart = props => {
    const dataShoppingCart = sortArrayOfObject(useSelector(state => state.shoppingCart.data), 'date');
    const totalPay = useSelector(state => state.bookings.totalPay);
    const existItems = Object.keys(dataShoppingCart).length > 0;
    const dispatch = useDispatch();

    useEffect(() => {
        if (existItems) dispatch(setInitialBookings(dataShoppingCart));
    }, []);

    const onChangeCheckBox = (e, data) => {
        e.target.checked ? dispatch(addBookings(data)) : dispatch(removeBookings(data.id));        
    };

    const onRemove = (e, data) => {
        dispatch(removeShoppingCart(data.id));
        dispatch(removeBookings(data.id));
    };

    return <BasicView title="Mi carrito">
        {existItems ?
            <DetailItems data={dataShoppingCart} onChangeCheckBox={onChangeCheckBox} totalPay={totalPay} onRemove={onRemove} />
            :
            <h3>No hay articulos en el carrito!</h3>
        }
    </BasicView>
};

export default ShoppingCart;