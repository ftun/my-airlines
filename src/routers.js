import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = lazy(() => import('./App'));
const ShoppingCart = lazy(() => import('./views/shoppingCart'));
const Bookings = lazy(() => import('./views/bookings'));

const Routers = () => {
    return <Suspense fallback={<h5>Loading...</h5>}>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route exact path='/carrito' element={<ShoppingCart />} />
                <Route exact path='/reservas' element={<Bookings />} />
                <Route element={NotFound} />
            </Routes>
        </Suspense>
    ;
};

const NotFound = () => <div>
        <h1>Not Found (#404)</h1>
        <code>Page Not Found</code>
    </div>;

export default Routers;