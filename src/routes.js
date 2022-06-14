import React, { Suspense, lazy } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Home = lazy(() => import('./pages/Home/index'));

export const routes = (
    <Routes >
        {/*Rutas publicas*/}
        <Route path="/" exact={true} element={<Home />} />

        {/*Rutas privadas*/}
        <Route path="/private" element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        } />

        <Route path="*" exact={true} element={<Home />} />
    </Routes>

);