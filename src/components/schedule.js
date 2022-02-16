import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSchedules } from '../store/reducers/schedules';

const Schedule = props => {
    const currentSearch = useSelector(state => state.currentSearch.data);
    const schedules = useSelector(state => state.schedules.data);
    const dispatch = useDispatch();
    const existData = Object.keys(currentSearch).length > 0;

    useEffect(() => {
        if (existData) dispatch(getDataSchedules());
    }, [existData]);

    if (!existData) return null;
    return <div className='card'>
        <h1>Horarrios de vuelos</h1>
        <ul>
            {schedules.map((s, i) => <li key={i}>{s.aerolinea}</li>)}
        </ul>  
    </div>
}

export default Schedule;