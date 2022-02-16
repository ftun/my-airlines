import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataMainDestinations } from '../store/reducers/mainDestinations';

const MainDestinatios = props => {
    const mainDestinations = useSelector(state => state.mainDestinations.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataMainDestinations())
    }, []);

    return mainDestinations.map((d, i) => {
        return <div className="card">
            <h5>{d.titulo}</h5>
            <img className="fakeimg" src={d.srcImagen}></img>
            <p>{d.descripcion}</p>
        </div>
    });
};


export default MainDestinatios;