import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicView from '../components/basicView';

import DetailItems from '../components/detailItems';

const Bookings = props => {
    const dataBookings = useSelector(state => state.bookings.bookings);

    return <BasicView title="Mis reservas">
        {dataBookings.map((data, i) => {
            return <DetailItems key={i} data={data.items} showActions={false} showDetailPay={false} />
        })}
    </BasicView>;
};

export default Bookings;