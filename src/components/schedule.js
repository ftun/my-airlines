import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSchedules } from '../store/reducers/schedules';
import { addShoppingCart, removeShoppingCart } from '../store/reducers/shoppingCart';
import BasicView from './basicView'
// import Select from '../components/form/select';

const Schedule = props => {
    const dataCurrentSearch = useSelector(state => state.currentSearch.data);
    const dataSchedules = useSelector(state => state.schedules.data);
    const dataShoppingCart = useSelector(state => state.shoppingCart.data);
    const numberPerson = dataCurrentSearch.number;

    const itemsShoppingCart = [...new Set(dataShoppingCart.map(d => d.id))]
    // const listAerolineas = useSelector(state => state.schedules.listAerolineas);
    const dispatch = useDispatch();
    const existData = Object.keys(dataCurrentSearch).length > 0;

    useEffect(() => {
        if (existData) dispatch(getDataSchedules());
    }, [existData]);

    const onClickAdd = data => {
        dispatch(addShoppingCart(data));
    }

    const onClickRemove = id => {
        dispatch(removeShoppingCart(id));
    }

    if (!existData) return null;

    // console.log('itemsShoppingCart', itemsShoppingCart);
    return <BasicView title={<h3>Horarios de vuelos: {dataCurrentSearch.descriptionFrom} - {dataCurrentSearch.descriptionTo}</h3>}>
        <table>
            <tbody>
                {dataSchedules.map((s, i) => {
                    let data = { ...s };
                    data.id = `${i}-${dataCurrentSearch.date}-${dataCurrentSearch.descriptionFrom}-${dataCurrentSearch.descriptionTo}`;
                    data.date = dataCurrentSearch.date;
                    data.descriptionFrom = dataCurrentSearch.descriptionFrom;
                    data.descriptionTo = dataCurrentSearch.descriptionTo;
                    data.numberPerson = numberPerson;
                    data.precioPersona = s.precio * numberPerson;
                    data.iva = (data.precioPersona * 16) / 100;
                    data.precioFinal = data.precioPersona + data.iva;
                    return <tr key={i}>
                        <td><img src={s.imagen} /></td>
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
                                <input type="button" value="-" onClick={e => onClickRemove(data.id)} style={{ backgroundColor: 'orange' }} /> :
                                <input type="button" value="+" onClick={e => onClickAdd(data)} />
                            }
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </BasicView>
}

export default Schedule;


