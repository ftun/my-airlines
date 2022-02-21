import React from 'react';
import { Link } from "react-router-dom";

const DetailItems = ({
    data = [],
    showActions = true,
    totalPay = 0,
    showDetailPay = true ,
    onChangeCheckBox = () => { },
    onRemove = () => {},
}) => {
    return <table>
        <tbody>
            {data.map((s, i) => {
                return <tr key={i}>
                    {showActions && <td>
                        <input type="checkbox" value="Bike" defaultChecked={true} onChange={e => onChangeCheckBox(e, s)} />
                    </td>}
                    <td>
                        <img src={s.imagen} />
                    </td>
                    <td>
                        <b>Vuelo de:</b> {s.descriptionFrom} <b>a:</b> {s.descriptionTo} <br />
                        <b>Fecha:</b> {s.date} <b>Horario:</b> {s.horario}  <br />
                        <b>Tipo:</b> {s.tipo} <b>Duracion:</b> {s.duracion}  <br />
                    </td>
                    {showDetailPay && <td >
                        <b>Precion por persona: ${s.precio} MXN</b> <br />
                        <b>{s.numberPerson}</b> Persona{s.numberPerson > 1 && 's'}:   <b>${s.precioPersona} MXN </b> <br />
                        Iva: <b>${s.iva} MXN </b> <br />
                        Precio final: <b>${s.precioFinal} MXN </b>
                    </td>}
                    {showActions && <td>
                        <input type="button" value="-" className="in-table" onClick={e => onRemove(e, s)} style={{ backgroundColor: 'orange' }} />
                    </td>}
                </tr>
            })}
            {showActions && <tr>
                <td colSpan={4}>
                    <h3>Total a pagar: ${totalPay} MXN</h3>
                    {totalPay > 0 && <Link to="/pagar" className='button' style={{ backgroundColor: 'blue', padding: '8px 30px' }}>Pagar</Link>}
                </td>
            </tr>}
        </tbody>
    </table>
};

export default DetailItems;