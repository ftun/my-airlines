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
                        <h3>Horarios</h3>
                    </div>
                    {/* <div className="divTableCell">
                        Filtrar Aerolinea: <Select name="list" options={listAerolineas} />
                    </div> */}
                </div>
                <div className="divTableRow">
                    <div className="divTable">
                        <div className="divTableBody">
                            {schedules.map((s, i) => {
                                return <div key={i} className="divTableRow">
                                    <div className="divTableCell">
                                        <b>Aerolinea:</b> {s.aerolinea}
                                    </div>
                                    <div className="divTableCell">
                                        <b>Hora:</b> {s.horario}
                                    </div>
                                    <div className="divTableCell">
                                        <b>Precio:</b> {s.precio}
                                    </div>
                                </div>
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Schedule;