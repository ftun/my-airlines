import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';
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
        <table>
            <tbody>
                {items.map((s, i) => {
                    return <tr key={i}>
                        <td>
                            <input type="checkbox" value="Bike" defaultChecked={true} onChange={e => onChangeCheckBox(e, s)} />
                        </td>
                        <td>
                            <img src={s.imagen} />
                        </td>
                        <td>
                            <b>Vuelo de:</b> {s.descriptionFrom} <b>a:</b> {s.descriptionTo} <br />
                            <b>Fecha:</b> {s.date} <b>Horario:</b> {s.horario}  <br />
                            <b>Tipo:</b> {s.tipo} <b>Duracion:</b> {s.duracion}  <br />
                        </td>
                        <td >
                            <b>Precion por persona: ${s.precio} MXN</b> <br />
                            <b>{s.numberPerson}</b> Persona{s.numberPerson > 1 && 's'}:   <b>${s.precioPersona} MXN </b> <br />
                            Iva: <b>${s.iva} MXN </b> <br />
                            Precio final: <b>${s.precioFinal} MXN </b>
                        </td>
                    </tr>
                })}
                <tr>
                    <td colSpan={4}>
                        <h3>Total a pagar: ${totalPay} MXN</h3>
                        {totalPay > 0 && <Link to="/pagar" className='button' style={{ backgroundColor: 'orange', padding: '8px 30px' }}>Pagar</Link>}
                    </td>
                </tr>
            </tbody>
        </table>
    </BasicView>
};

export default ShoppingCart;