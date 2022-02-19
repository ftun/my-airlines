import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';

import { sortArrayOfObject } from '../components/utils';

const ShoppingCart = props => {
    const dataShoppingCart = sortArrayOfObject(useSelector(state => state.shoppingCart.data), 'date');
     
    const existItems = Object.keys(dataShoppingCart).length > 0;
    
    const onChangeCheckBox = (e, data) => {
        console.log(e.target.checked , data);
    };

    return <BasicView title="Mi carrito">
        <table>
            <tbody>
                {dataShoppingCart.map((s, i) => {
                    console.log(s);
                    return <tr key={i}>
                        <td>
                            <input type="checkbox" value="Bike" defaultChecked={true} onChange={e => onChangeCheckBox(e, i)} />
                        </td>
                        <td><img src={s.imagen} /></td>
                        <td>
                            <b>Vuelo de:</b> {s.descriptionFrom} <b>a:</b> {s.descriptionTo} <br />
                            <b>Fecha:</b> {s.date} <b>Horario:</b> {s.horario}  <br />
                            <b>Tipo:</b> {s.tipo} <b>Duracion:</b> {s.duracion}  <br />
                        </td>
                        <td>
                            <b>Precion por persona: ${s.precio} MXN</b> <br />
                            <b>{s.numberPerson}</b> Persona{s.numberPerson > 1 && 's'}:   <b>${s.precioPersona} MXN </b> <br />
                            Iva: <b>${s.iva} MXN </b> <br />
                            Precio final: <b>${s.precioFinal} MXN </b>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </BasicView>
};

export default ShoppingCart;