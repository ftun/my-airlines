import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import './index.css';
// import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import Layout from './components/layout';
import Routers from './routers';

const menuItems = [
    {label: 'Vuelos', path: '/vuelos'},
    {label: 'Paquetes', path: '/paquetes'},
    {label: 'Ofertas', path: '/ofertas'},
];

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout menuItems={menuItems}>
                <Routers />
            </Layout>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
