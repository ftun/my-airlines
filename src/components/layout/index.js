import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

const Index = ({ menuItems, children }) => {
    return <BrowserRouter>
        <div className="header">
            <h1><Link to="/">Vuelos</Link></h1>
        </div>
        <div className="topnav">
            {menuItems.map((item, index) => <Link key={index} to={item.path}>{item.label}</Link>)}
            <Link to="/carrito" style={{ float: 'right' }}>Carrito</Link>
        </div>
        <div className="row">
            <div className="leftcolumn">
                <div className="card">
                    <h2>Los mejores destinos</h2>
                    <h5>Cancun, Mexico</h5>
                    <div className="fakeimg">Image</div>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
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