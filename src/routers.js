import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = lazy(() => import('./App'));
const Index = lazy(() => import('./views'));

const Routers = () => {
    return <Suspense fallback={<h5>Loading...</h5>}>
            <Routes>
                <Route exact path='/' element={<Index />} />
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