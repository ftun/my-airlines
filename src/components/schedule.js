import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSchedules } from '../store/reducers/schedules';

// import Select from '../components/form/select';

const Schedule = props => {
    const currentSearch = useSelector(state => state.currentSearch.data);
    const schedules = useSelector(state => state.schedules.data);
    const listAerolineas = useSelector(state => state.schedules.listAerolineas);
    const dispatch = useDispatch();
    const existData = Object.keys(currentSearch).length > 0;

    useEffect(() => {
        if (existData) dispatch(getDataSchedules());
    }, [existData]);

    if (!existData) return null;
    return <div className='card'>
        <div className="divTable">
            <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell">
                        <h3>Horarrios de vuelos</h3>
                    </div>
                    {/* <div className="divTableCell">
                        Filtrar Aerolinea: <Select name="list" options={listAerolineas} />
                    </div> */}
                </div>
                <div className="divTableRow">
                    <ul>
                        {schedules.map((s, i) => <li key={i}>{s.aerolinea}</li>)}
                    </ul>  
                </div>
            </div>
        </div>
    </div>
}

export default Schedule;