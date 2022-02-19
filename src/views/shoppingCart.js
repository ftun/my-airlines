import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';

const ShoppingCart = props => {
    const dataShoppingCart = useSelector(state => state.shoppingCart.data);
    const existItems = Object.keys(dataShoppingCart).length > 0;

    return <BasicView title="Mi carrito">
        <table>
            <tbody>
                {dataShoppingCart.map((s, i) => {
                    console.log(s);
                    return <tr key={i}>
                        <td>
                            <h4>Precion por persona: ${s.precio} MXN</h4>

                            Iva: {s.iva} <br />
                            Precio final: <b>${s.precioFinal} MXN </b>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </BasicView>
};

export default ShoppingCart;