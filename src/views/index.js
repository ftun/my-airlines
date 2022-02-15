import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataCountries } from '../store/reducers/countries';

import Select from '../components/form/select';

const Index = props => {
    const [typeFlight, setTypeFlight] = useState('IDA');
    const countries = useSelector(state => state.countries.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCountries());
    }, []);

    const onChangeRadio = e => {
        console.log(e.target.value);
        setTypeFlight(e.target.value);
    };

    // console.log(countries);
    return <div className='card'>
        <form>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow"><h3>Reservar vuelos</h3></div>
                    <div className="divTableRow">
                        <div className="divTableCell">Origen</div>
                        <div className="divTableCell">Destino</div>
                        <div className="divTableCell">
                            <label><input type="radio" name="isRound" value="IDA" defaultChecked onChange={onChangeRadio}/>Ida</label>
                            <label><input type="radio" name="isRound" value="REDONDO" onChange={onChangeRadio}/>Redondo</label>
                            <br />Fecha 
                        </div>
                        {typeFlight == 'REDONDO' && <div className="divTableCell"></div>}
                        <div className="divTableCell">N° Personas</div>
                        <div className="divTableCell"></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Select name="from" options={countries}/></div>
                        <div className="divTableCell"><Select name="to" options={countries}/></div>
                        <div className="divTableCell"><input name="date-begin" type="date"/></div>
                        {typeFlight == 'REDONDO' && <div className="divTableCell"><input name="date-end" type="date"/></div>}
                        <div className="divTableCell"><input name="number" type="number"/></div>
                        <div className="divTableCell"><input type="submit"/></div>
                    </div>
                </div>
            </div>
        </form>
    </div>
};

export default Index;