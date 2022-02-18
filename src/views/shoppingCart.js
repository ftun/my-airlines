import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ShoppingCart = props => {
    const dataShoppingCart = useSelector(state => state.shoppingCart.data);
    const existItems = Object.keys(dataShoppingCart).length > 0;

    return <div className='card'>
        <div className="divTable">
            <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell">
                        <h3>Mi carrito</h3>
                    </div>
                </div>
                <div className="divTableRow">
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
                </div>
            </div>
        </div>
    </div>
};

export default ShoppingCart;