import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSchedules } from '../store/reducers/schedules';
import { addShoppingCart, removeShoppingCart } from '../store/reducers/shoppingCart';
import BasicView from './basicView';

const Schedule = props => {
    const dataCurrentSearch = useSelector(state => state.currentSearch.data);
    const dataSchedules = useSelector(state => state.schedules.data);
    const dataShoppingCart = useSelector(state => state.shoppingCart.data);
    const numberPerson = dataCurrentSearch.number;

    const itemsShoppingCart = [...new Set(dataShoppingCart.map(d => d.id))]
    const dispatch = useDispatch();
    const existData = Object.keys(dataCurrentSearch).length > 0;

    useEffect(() => {
        if (existData) dispatch(getDataSchedules());
    }, [existData]);


    if (!existData) return <h3>Busca tu vuelo!</h3>;

    return <BasicView title={`Horarios de vuelos: ${dataCurrentSearch.descriptionFrom} - ${dataCurrentSearch.descriptionTo}`}>
        <table>
            <tbody>
                {dataSchedules.map((s, i) => {
                    let data = { ...s };
                    data.id = `${i}-${numberPerson}-${dataCurrentSearch.date}-${dataCurrentSearch.descriptionFrom}-${dataCurrentSearch.descriptionTo}`;
                    data.date = dataCurrentSearch.date;
                    data.descriptionFrom = dataCurrentSearch.descriptionFrom;
                    data.descriptionTo = dataCurrentSearch.descriptionTo;
                    data.numberPerson = numberPerson;
                    data.precioPersona = s.precio * numberPerson;
                    data.iva = (data.precioPersona * 16) / 100;
                    data.precioFinal = data.precioPersona + data.iva;
                    return <tr key={i}>
                        <td>
                            <img src={s.imagen} className="avatar"/>
                        </td>
                        <td>
                            Horario: <b>{s.horario}</b> <br />
                            Tipo: {s.tipo} <br />
                            Duracion: <b>{s.duracion}</b>
                        </td>
                        <td>
                            <b>Precion por persona: ${s.precio} MXN</b> <br />
                            <b>{numberPerson}</b> Persona{numberPerson > 1 && 's'}:   <b>${data.precioPersona} MXN </b> <br />
                            Iva: <b>${data.iva} MXN </b> <br />
                            Precio final: <b>${data.precioFinal} MXN </b>
                        </td>
                        <td>
                            {itemsShoppingCart.includes(data.id) ?
                                <input type="button" value="-" className="in-table" onClick={e => dispatch(removeShoppingCart(data.id))} style={{ backgroundColor: 'orange' }} /> :
                                <input type="button" value="+" className="in-table" onClick={e => dispatch(addShoppingCart(data))} />
                            }
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </BasicView>
}

export default Schedule;


