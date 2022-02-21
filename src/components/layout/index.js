import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import MainDestinatios from '../mainDestinations';
import { useSelector } from 'react-redux';

const Index = ({ menuItems, children }) => {
    const dataShoppingCart = useSelector(state => state.shoppingCart.data);
    const numberShoppingCart = dataShoppingCart.length > 0 ? `(${dataShoppingCart.length})` : '';

    return <BrowserRouter>
        <div className="header">
            <h1>Vuelos</h1>
        </div>
        <div className="topnav">
            {menuItems.map((item, index) => <Link key={index} to={item.path}>{item.label}</Link>)}
            <Link to="/carrito" style={{ float: 'right' }}>Carrito {numberShoppingCart}</Link>
        </div>
        <div className="row">
            <div className="leftcolumn">
                <div className='card'>
                    <h3>Los mejores destinos</h3>
                </div>
                <MainDestinatios />
            </div>
            <div className="rightcolumn">
                {children}
            </div>
        </div>
        <div className="footer">
            <h5>© copyright {new Date().getFullYear()}</h5>
        </div>
    </BrowserRouter>

};

export default Index;