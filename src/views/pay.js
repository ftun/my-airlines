import React, { useEffect, useState } from 'react';
import BasicView from '../components/basicView';
import DetailItems from '../components/detailItems';

import { useSelector, useDispatch } from 'react-redux';
import { getDataForm } from '../components/utils';

import { postDataBookings } from '../store/reducers/bookings';
import { itemsPay } from '../store/reducers/shoppingCart';

const Pay = props => {
    const dataBookings = useSelector(state => state.bookings.data);
    const totayPay = dataBookings.reduce((sum, b) => sum + b.precioFinal, 0);

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        let data = getDataForm(e.target);
        data.totayPay = totayPay;
        data.items = dataBookings;
        dispatch(postDataBookings(data));
        dispatch(itemsPay(dataBookings));
    };

    return <BasicView title="Ingresar informacion para el pago">
        <div className='card'>
            <form onSubmit={onSubmit}>
                <div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">Nombres</div>
                            <div className="divTableCell">Apellidos</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">
                                <input name="nombres" type="text" min={1} max={255} required={true} />
                            </div>
                            <div className="divTableCell">
                                <input name="apellidos" type="text" min={1} max={255} required={true} />
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Direccion </div>
                            <div className="divTableCell">Correo electronico</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">
                                <input name="direccion" type="text" min={1} max={255} required={true} />
                            </div>
                            <div className="divTableCell">
                                <input name="correo" type="text" min={1} max={255} required={true} />
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">
                                <h3>Total a pagar: ${totayPay} MXN</h3>
                            </div>
                            <div className="divTableCell">
                                <button type="submit">Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <DetailItems data={dataBookings} showActions={false} />
        </div>
    </BasicView>
};

export default Pay;
