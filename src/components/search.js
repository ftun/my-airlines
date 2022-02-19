import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataCountries } from '../store/reducers/countries';
import { setCurrentSearch } from '../store/reducers/currentSearch';

import Select from '../components/form/select';
import { getCurrentDate, getDataForm } from '../components/utils';

const Search = props => {
    const countries = useSelector(state => state.countries.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCountries());
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        let data = getDataForm(e.target);
        data.descriptionFrom = countries.filter(c => c.value == data.from)[0].description || '';
        data.descriptionTo = countries.filter(c => c.value == data.to)[0].description || '';
        dispatch(setCurrentSearch(data));
    };

    return <div className='card'>
        <form onSubmit={onSubmit}>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow"><h3>Reservar vuelos</h3></div>
                    <div className="divTableRow">
                        <div className="divTableCell">Origen</div>
                        <div className="divTableCell">Destino</div>
                        <div className="divTableCell">Fecha </div>
                        <div className="divTableCell">N° Personas</div>
                        <div className="divTableCell"></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">
                            <Select name="from" options={countries} required={true} />
                        </div>
                        <div className="divTableCell">
                            <Select name="to" options={countries} required={true} />
                        </div>
                        <div className="divTableCell">
                            <input name="date" type="date" min={getCurrentDate()} required={true} />
                        </div>
                        <div className="divTableCell">
                            <input name="number" type="number" min={1} defaultValue={1} required={true} />
                        </div>
                        <div className="divTableCell">
                            <button type="submit">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
};

export default Search;