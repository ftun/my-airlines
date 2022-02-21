import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';

import DetailItems from '../components/detailItems';

const Bookings = props => {
    const dataBookings = useSelector(state => state.bookings.bookings);
    const numberBookings = dataBookings.length > 0 ? `(${dataBookings.length})` : '';

    return <BasicView title={"Mis reservas " + numberBookings}>
        <table>
            <tbody>
                {dataBookings.length > 0 ? 
                    dataBookings.map((data, i) => {                    
                        return <>
                            <tr key={i + '1'}>
                                <td>
                                    <b>Reservacion a nombre de:</b> {data.nombres} {data.apellidos} <br />
                                    <b>Correo electronido:</b> {data.correo} <br />
                                    <b>Direccion:</b> {data.direccion}
                                </td>
                            </tr>
                            <tr key={i + '2'}>
                                <td>
                                    <DetailItems data={data.items} showActions={false} showDetailPay={false} />
                                </td>
                            </tr>
                        </>
                    })
                    :
                    <tr >
                        <td>
                            No hay reservas existentes!
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    </BasicView>;
};

export default Bookings;