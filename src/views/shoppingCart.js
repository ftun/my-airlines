import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';
import DetailItems from '../components/detailItems';
import { addBookings, removeBookings, setInitialBookings } from '../store/reducers/bookings';

import { sortArrayOfObject } from '../components/utils';

const ShoppingCart = props => {
    const [items, setItems] = useState([]);
    const [totalPay, setTotalPay] = useState(0);
    const dataShoppingCart = sortArrayOfObject(useSelector(state => state.shoppingCart.data), 'date');
    const existItems = Object.keys(dataShoppingCart).length > 0;
    const dispatch = useDispatch();

    useEffect(() => {
        if (existItems) {
            setItems(dataShoppingCart);
            getTotalPayAmount();
            dispatch(setInitialBookings(dataShoppingCart));
        }
    }, []);

    const getTotalPayAmount = () => {
        let total = dataShoppingCart.reduce((sum, b) => sum + b.precioFinal, 0);
        setTotalPay(total);
    };

    const onChangeCheckBox = (e, data) => {
        let newTotalPay = 0;
        if (e.target.checked) {
            newTotalPay = totalPay + data.precioFinal;
            dispatch(addBookings(data));
        } else {
            newTotalPay = totalPay - data.precioFinal;
            dispatch(removeBookings(data.id));
        }
        
        setTotalPay(newTotalPay);
    };

    return <BasicView title="Mi carrito">
        <DetailItems data={items} onChangeCheckBox={onChangeCheckBox} totalPay={totalPay} />
    </BasicView>
};

export default ShoppingCart;