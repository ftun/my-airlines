import React, { useEffect, useState } from 'react';
import BasicView from '../components/basicView';
import { useSelector, useDispatch } from 'react-redux';

const Pay = props => {
    const dataBookings = useSelector(state => state.bookings.data);
    const totayPay = dataBookings.reduce((sum, b) => sum + b.precioFinal, 0);

    const onSubmit = e => {
        e.preventDefault();
    };

    // `Total a pagar: $${totayPay} MXN`
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
                                <input name="number" type="text" min={1} required={true} />
                            </div>
                            <div className="divTableCell">
                                <input name="number" type="text" min={1} required={true} />
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Direccion </div>
                            <div className="divTableCell">Correo electronico</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">
                                <input name="number" type="text" min={1} required={true} />
                            </div>
                            <div className="divTableCell">
                                <input name="number" type="text" min={1} required={true} />
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">
                                <b>Total a pagar: ${totayPay} MXN</b>
                            </div>
                            <div className="divTableCell">
                                <button type="submit">Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </BasicView>
};

export default Pay;
