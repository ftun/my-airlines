import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSchedules } from '../store/reducers/schedules';

// import Select from '../components/form/select';

const Schedule = props => {
    const currentSearch = useSelector(state => state.currentSearch.data);
    const schedules = useSelector(state => state.schedules.data);
    const numberPerson = currentSearch.number;
    // const listAerolineas = useSelector(state => state.schedules.listAerolineas);
    const dispatch = useDispatch();
    const existData = Object.keys(currentSearch).length > 0;

    useEffect(() => {
        if (existData) dispatch(getDataSchedules());
    }, [existData]);

    const onClickAdd = data => {
        console.log(data);
    }

    if (!existData) return null;
    return <div className='card'>
        <div className="divTable">
            <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell">
                        <h3>Horarios de vuelos: {currentSearch.descriptionFrom} - {currentSearch.descriptionTo}</h3>
                    </div>
                    {/* <div className="divTableCell">
                        Filtrar Aerolinea: <Select name="list" options={listAerolineas} />
                    </div> */}
                </div>
                <div className="divTableRow">
                    <table>
                        <tbody>
                            {schedules.map((s, i) => {
                                let data = {...s};
                                data.precioPersona = s.precio * numberPerson;
                                data.iva = (data.precioPersona * 16) / 100;
                                data.precioFinal = data.precioPersona + data.iva;
                                return <tr key={i}>
                                    <td><img src={s.imagen}/></td>
                                    <td>
                                        Hora: <b>{s.horario}</b> <br />
                                        Tipo: {s.tipo} <br />
                                        Duracion: <b>{s.duracion}</b>
                                    </td>
                                    <td>
                                        <h4>Precion por persona: ${s.precio} MXN</h4>
                                        <b>{numberPerson}</b> Persona{numberPerson > 1 && 's'}:   <b>${data.precioPersona} MXN </b>
                                        Iva: {data.iva} <br />
                                        Precio final: <b>${data.precioFinal} MXN </b>
                                    </td>
                                    <td>
                                        <input type="button" value="+" onClick={e => onClickAdd(data)} />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}

export default Schedule;