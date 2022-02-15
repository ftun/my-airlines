import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataCountries } from '../store/reducers/countries';
import { setBooking } from '../store/reducers/booking';

import Select from '../components/form/select';
import { getCurrentDate } from '../components/utils';

const Index = props => {
    // const [typeFlight, setTypeFlight] = useState('IDA');
    const countries = useSelector(state => state.countries.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCountries());
    }, []);

    const onSubmit = e => {
        console.log(e.type);
        e.preventDefault();

        dispatch(setBooking({
            uno: 'kjhskd',
            dos: 'kjhskd'
        }))
    };

    // const onChangeRadio = e => {
    //     console.log(e.target.value);
    //     setTypeFlight(e.target.value);
    // };

    // console.log(countries);
    return <div className='card'>
        <form onSubmit={onSubmit}>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow"><h3>Reservar vuelos</h3></div>
                    <div className="divTableRow">
                        <div className="divTableCell">Origen</div>
                        <div className="divTableCell">Destino</div>
                        <div className="divTableCell">Fecha </div>
                        {/* <div className="divTableCell">
                            <label><input type="radio" name="isRound" value="IDA" defaultChecked onChange={onChangeRadio} />Ida</label>
                            <label><input type="radio" name="isRound" value="REDONDO" onChange={onChangeRadio} />Redondo</label>
                        </div> */}
                        <div className="divTableCell">N° Personas</div>
                        <div className="divTableCell"></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Select name="from" options={countries}/></div>
                        <div className="divTableCell"><Select name="to" options={countries}/></div>
                        <div className="divTableCell"><input name="date" type="date" min={getCurrentDate()}/></div>
                        {/* <div className="divTableCell"><input name="date-end" type="date" disabled={typeFlight == 'IDA'} /></div> */}
                        <div className="divTableCell"><input name="number" type="number" min={1} defaultValue={1} /></div>
                        <div className="divTableCell"><input type="submit" onClick={onSubmit}/></div>
                    </div>
                </div>
            </div>
        </form>
    </div>
};

export default Index;